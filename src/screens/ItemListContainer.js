import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { getDatabase, ref, onValue } from 'firebase/database'

import { app } from '../utils/data/index'
import ItemList from '../components/ItemList'
import SearchBar from '../components/SearchBar'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemListContainer = ({
    navigation,
    route
}) => {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    const database = getDatabase(app)
    const localId = useSelector((state) => state.auth.localId)
    const itemsRef = ref(database, `/users/${ localId }/items`)
    const { categorySelected } = route.params
    const [ categoryFilter, setCategoryFilter ] = useState([])
    const [ itemFilter, setItemFilter ] = useState(categoryFilter)    
    const [ keyWord, setKeyWord ] = useState('')

    const keyWordHandler = (text) => { setKeyWord(text) }

    const fetchFilteredItems = (newItems) => {
        if (newItems) {
            const filter = newItems.filter(item => item.category === categorySelected)
            const sort = filter.sort((b, a) => b.date.localeCompare(a.date))
            setCategoryFilter(sort)
        }
    }

    useEffect(() => {
        const unsubscribe = onValue(itemsRef, (snapshot) => {
            if (snapshot.exists()) {
                const newItems = Object.values(snapshot.val())
                fetchFilteredItems(newItems)
            } else {
                fetchFilteredItems([])
            }
        })
        return () => unsubscribe()
    }, [ itemsRef ])
    
    useEffect(() => {
        const itemsFilter = categoryFilter.filter((item) =>
            item.name.toLowerCase().includes(keyWord) || item.name.toUpperCase().includes(keyWord)
        )
        setItemFilter(itemsFilter)
    }, [ keyWord ])

    return (
        <View style = {[ styles.container, { height: windowHeight } ]}>
            <SearchBar
                keyWordHandler = { keyWordHandler }
            />
            <View style = { styles.itemByCategory }>
                <FlatList
                    data = { itemFilter.length === 0 ? categoryFilter : itemFilter }
                    keyExtractor = { item => item.id }
                    renderItem = {({ item }) =>
                        <ItemList
                        item = { item }
                            navigation = { navigation }
                        />
                    }
                />
            </View>
            <Pressable
                onPress = { () => navigation.navigate(
                    'ItemManager',
                    { categorySelected }
                )}
                style = {[ styles.createButton, { width: windowWidth - 60 } ]}
            >
                <Text style = { styles.buttonTitle }>Agregar</Text>
            </Pressable>
        </View>
    )
}

export default ItemListContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    itemByCategory: {
        alignItems: 'center',
        paddingBottom: 20
    },
    altTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingTop: 20,
        textAlign: 'center'
    },
    createButton: {
        alignSelf: 'center',
        backgroundColor: colors.button,
        borderColor: colors.button,
        borderRadius: 8,
        padding: 10,
        position: 'absolute',
        bottom: 100,
    },
    buttonTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        textAlign: 'center'
    }
})