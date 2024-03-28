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
import OrderList from '../components/OrderList'
import SearchBar from '../components/SearchBar'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const OrderListContainer = ({
    navigation
}) => {

    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const [ orderFilter, setOrderFilter ] = useState([])

    const fetchFilteredOrders = (newOrders) => {
        if (newOrders) {
            const sort = newOrders.sort((b, a) => b.date.localeCompare(a.date))
            setOrderFilter(sort)
        }
    }

    const database = getDatabase(app)

    useEffect(() => {
        const ordersRef = ref(database, `/users/${ localId }/orders`)
        const unsubscribe = onValue(ordersRef, (snapshot) => {
            const newOrders = Object.values(snapshot.val())
            fetchFilteredOrders(newOrders)
        })
        return () => unsubscribe()
    }, [ orderFilter ])

    const [ keyWord, setKeyWord ] = useState('')
    const keyWordHandler = (text) => { setKeyWord(text) }
    useEffect(() => {
        const filter = orderFilter.filter((order) =>
            order.name.toLowerCase().includes(keyWord) || order.name.toUpperCase().includes(keyWord)
        )
        setOrderFilter(filter)
    }, [ keyWord ])
    
    return (
        <View style = {[ styles.container, { height: windowHeight } ]}>
            <SearchBar
                keyWordHandler = { keyWordHandler }
            />
            <View style = { styles.ordersDisplay }>
                { orderFilter.length === 0
                    ? <Text>No hay Declaraciones</Text>
                    : <FlatList
                        data = { orderFilter }
                        keyExtractor = { item => item.id }
                        renderItem = {({ item }) =>
                            <OrderList
                                order = { item }
                                navigation = { navigation }
                            />
                        }
                    />
                } 
            </View>
            <Pressable
                onPress = { () => navigation.navigate(
                    'OrderManager'
                )}
                style = {[ styles.createButton, { width: windowWidth - 60 } ]}
            >
                <Text style = { styles.buttonTitle }>Generar</Text>
            </Pressable>
        </View>
    )
}

export default OrderListContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    ordersDisplay: {
        alignItems: 'center',
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