import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { getDatabase, ref, update } from 'firebase/database'
import uuid from 'react-native-uuid'

import { app } from '../utils/data/index'
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'

const ItemManager = ({
    navigation,
    route
}) => {

    const windowWidth = Dimensions.get('window').width

    const { categorySelected } = route.params
    const localId = useSelector((state) => state.auth.localId)
    const db = getDatabase(app)

    const [ newItem, setNewItem ] = useState({
        id: uuid.v4(),
        category: categorySelected,
        name: '',
        amount: 0,
        taxes: 0,
        date: ''
    })

    const itemsRef = ref(db, `/users/${ localId }/items/${ newItem.id }`)

    const taxCalc = (input, categorySelected) => {
        return categorySelected === 'Contribuciones'
            ? input * -1
            : categorySelected === 'Herencias'
                ? input * 0.01
                : categorySelected === 'IVA'
                    ? input * 0.19
                    : categorySelected === 'Primera Categoría'
                        ? input * 0.025
                        : categorySelected === 'Segunda Categoría'
                            ? input * 0.1
                            : null
    }

    const onHandleAddAmount = (input) => {
        const toNumber = isNaN(input) ? 0 : parseInt(input)
        setNewItem({
            ...newItem,
            amount: toNumber,
            taxes: taxCalc(toNumber, categorySelected)
        })
    }
    
    const onHandleAddName = (input) => {
        setNewItem({
            ...newItem,
            name: input,
            date: new Date(),
        })
    }

    const saveItem = () => {
        update(itemsRef, { ...newItem })
        setNewItem({
            id: '',
            category: '',
            name: '',
            amount: 0,
            taxes: 0,
            date: ''
        })
        navigation.goBack()
    }

    return (
        <View style = {[ styles.itemHandleContainer, { width: windowWidth - 20 } ]}>
            <TextInput 
                maxLength = { 20 }
                onChangeText = { onHandleAddName }
                placeholder = 'Glosa'
                placeholderTextColor = { colors.text } 
                style = {[ styles.textInput, { width: windowWidth - 60 } ]}
                value = { newItem.name }
            />
            <TextInput
                maxLength = { 10 }
                onChangeText = { onHandleAddAmount }
                placeholder = 'Monto'
                placeholderTextColor = { colors.text }
                style = {[ styles.textInput, { width: windowWidth - 60 } ]}
                value = { newItem.amount.toString() }
            />
            <EventButton
                onPress = { saveItem }
                title = 'Guardar'
            />
        </View>
    )
}

export default ItemManager

const styles = StyleSheet.create({
    itemHandleContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        marginTop: 20,
        paddingVertical: 20
    },
    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        marginBottom: 10,
        padding: 10
    }
})