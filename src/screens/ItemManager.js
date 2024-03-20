import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { getDatabase, ref, update } from "firebase/database"
import uuid from 'react-native-uuid'

import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'
import { app } from '../utils/data/index'

const ItemManager = ({ route, navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const { categorySelected } = route.params
    const localId = useSelector((state) => state.auth.localId)
    const app = app
    const db = getDatabase()

    const [ newItem, setNewItem ] = useState({
        id: uuid.v4(),
        category: categorySelected,
        name: '',
        amount: '',
        date: '',
    })

    const itemsRef = ref(db, `/users/${ localId }/items/${ newItem.id }`)

    const onHandleAddAmount = (input) => {
        setNewItem({ ...newItem, amount: input })
    }
    
    const onHandleAddName = (input) => {
        setNewItem({
            ...newItem,
            name: input,
            date: new Date().toLocaleString(),
        })
    }

    const saveItem = () => {
        update(itemsRef, { ...newItem })
        setNewItem({
            id: '',
            category: '',
            name: '',
            amount: '',
            date: '',
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
                value = { newItem.amount }
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