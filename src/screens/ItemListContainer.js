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

import { useGetItemsQuery } from '../app/services/items'
import EmptyList from '../components/EmptyList'
import Error from '../components/Error'
import ItemList from '../components/ItemList'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemListContainer = ({
    navigation,
    route
}) => {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const { data: items, isError, isLoading, isSuccess } = useGetItemsQuery(localId)
    const { categorySelected } = route.params
    const [ categoryFilter, setCategoryFilter ] = useState([])

    // if (isLoading) return <Loading/>
    // if (isError) return <Error message = '¡Ups! Algo salió mal.' textButton = 'Volver' onRetry = { () => navigation.goBack() }/>
    // if (isSuccess && items.length === 0) return <EmptyList message = 'No hay ítems en esta categoría'/>

    useEffect(() => {
        const fetchFilteredItems = () => {
            if (items) {
                const filter = items.filter(item => item.category === categorySelected)
                const sortedFilter = filter.sort((b, a) => b.date.localeCompare(a.date))
                setCategoryFilter(sortedFilter)
            }
        }
        fetchFilteredItems()
    }, [ items, categorySelected ])
    
    const [ itemFilter, setItemFilter ] = useState(categoryFilter)    
    const [ keyWord, setKeyWord ] = useState('')
    const keyWordHandler = (text) => { setKeyWord(text) }
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
        height: 400,
        paddingBottom: 20
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