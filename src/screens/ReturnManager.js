import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native'
import { getDatabase, ref, update } from "firebase/database"
import { Picker } from '@react-native-picker/picker'
import uuid from 'react-native-uuid'

import { useGetItemsQuery } from '../app/services/items'
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'
import { app } from '../utils/data/index'

const ReturnManager = ({ route, navigation }) => {

    const windowWidth = Dimensions.get('window').width
    const localId = useSelector((state) => state.auth.localId)
    const { data: items } = useGetItemsQuery(localId)
    const app = app
    const db = getDatabase()

    const [ selectedYear, setSelectedYear ] = useState()
    const [ yearFilter, setYearFilter ] = useState([])
    const [ newReturn, setNewReturn ] = useState({
        id: uuid.v4(),
        name: '',
        items: '',
        total: '',
        taxes: '',
        date: '',
    })

    const returnsRef = ref(db, `/users/${ localId }/orders/${ newReturn.id }`)
    const startOfYear = new Date(`01/01/${ selectedYear } 00:00:00 AM`)
    const endOfYear = new Date(`12/31/${ selectedYear } 23:59:59 PM`)

    useEffect(() => {
        const fetchFilteredItems = async () => {
            if (items) {
                const filter = items.filter(item => {
                    const itemDate = new Date(item.date)
                    return itemDate >= startOfYear && itemDate <= endOfYear
                })            
                setYearFilter(filter)
            }
        }
        fetchFilteredItems()
    }, [items, selectedYear])

    const saveReturn = () => {
        console.log('test', yearFilter)
        update(returnsRef, { ...newReturn, date: new Date().toLocaleString(), name: selectedYear })
        setNewReturn({
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
        <View style = {[ styles.returnHandleContainer, { width: windowWidth - 20 } ]}>
            <Picker
                style = {[ styles.picker, { width: windowWidth - 60 } ]}
                selectedValue = { selectedYear }
                onValueChange = { (itemValue, itemIndex) =>
                    setSelectedYear(itemValue)
                }>
                <Picker.Item label = '2020' value = '2020' />
                <Picker.Item label = '2021' value = '2021' />
                <Picker.Item label = '2022' value = '2022' />
                <Picker.Item label = '2023' value = '2023' />
                <Picker.Item label = '2024' value = '2024' />
            </Picker>
            <EventButton
                onPress = { saveReturn }
                title = 'Generar'
            />
        </View>
    )
}

export default ReturnManager

const styles = StyleSheet.create({
    returnHandleContainer: {
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