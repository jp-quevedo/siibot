import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native'
import { getDatabase, ref, update, onValue } from "firebase/database"
import { Picker } from '@react-native-picker/picker'
import uuid from 'react-native-uuid'

import { app } from '../utils/data/index'
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'

const OrderManager = ({
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width
    const localId = useSelector((state) => state.auth.localId)
    const database = getDatabase(app)

    const [ selectedYear, setSelectedYear ] = useState(new Date().getFullYear())
    const [ yearFilter, setYearFilter ] = useState([])
    const [ newOrder, setNewOrder ] = useState({
        id: uuid.v4(),
        name: '',
        items: '',
        total: 0,
        taxes: 0,
        date: '',
    })

    const ordersRef = ref(database, `/users/${ localId }/orders/${ newOrder.id }`)
    const startOfYear = new Date(`${selectedYear}-01-01T00:00:00`)
    const endOfYear = new Date(`${ selectedYear }-12-31T23:59:59`)

    const fetchFilteredItems = (items) => {
        if (items) {
            const filter = items.filter(item => {
                const itemDate = new Date(item.date)
                return itemDate >= startOfYear && itemDate <= endOfYear
            })
            setYearFilter(filter)
        }
    }

    useEffect(() => {
        const itemsRef = ref(database, `/users/${ localId }/items`)
        const unsubscribe = onValue(itemsRef, (snapshot) => {
            if (snapshot.exists()) {
                const items = Object.values(snapshot.val())
                fetchFilteredItems(items)
            } else {
                fetchFilteredItems([])
            }
        })
        return () => unsubscribe()
    }, [ selectedYear ])

    const saveOrder = () => {
        const totalBalance = yearFilter.reduce((sum, item) => {
            return sum + item.amount
           }, 0)
        const totalTaxes = yearFilter.reduce((sum, item) => {
            return sum + item.taxes
           }, 0)
        update(ordersRef, {
            ...newOrder,
            name: selectedYear,
            items: yearFilter,
            total: totalBalance,
            taxes: totalTaxes,
            date: new Date()
        })
        setNewOrder({
            id: '',
            name: '',
            items: '',
            total: '',
            taxes: '',
            date: '',
        })
        navigation.goBack()
    }

    return (
        <View style = {[ styles.orderHandleContainer, { width: windowWidth - 20 } ]}>
            <Picker
                style = {[ styles.picker, { width: windowWidth - 60 } ]}
                selectedValue = { selectedYear }
                onValueChange = { (itemValue) =>
                    setSelectedYear(itemValue)
                }>
                <Picker.Item label = '2020' value = '2020' />
                <Picker.Item label = '2021' value = '2021' />
                <Picker.Item label = '2022' value = '2022' />
                <Picker.Item label = '2023' value = '2023' />
                <Picker.Item label = '2024' value = '2024' />
            </Picker>
            <EventButton
                onPress = { saveOrder }
                title = 'Generar'
            />
        </View>
    )
}

export default OrderManager

const styles = StyleSheet.create({
    orderHandleContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        marginTop: 20,
        paddingVertical: 20
    },
    picker: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        marginBottom: 10,
    }
})