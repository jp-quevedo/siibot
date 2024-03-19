import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    Keyboard,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database'
import uuid from 'react-native-uuid'

import { baseUrl } from '../utils/data/database';
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'

const ItemManager = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width
    const localId = useSelector((state) => state.auth.localId)
    const categorySelected = useSelector(state => state.item.value.categorySelected)
    const reference = firebase
        .app()
        .database(baseUrl)
        .ref(`/users/${ localId }/items`)

    const [ newItem, setNewItem ] = useState({
        id: '',
        category: '',
        name: '',
        amount: '',
        date: '',
    })

    const onHandleAddAmount = (input) => {
        setNewItem({ ...newItem, amount: input })
    }
    
    const onHandleAddName = (input) => {
        setNewItem({
            ...newItem,
            id: uuid.v4(),
            category: categorySelected,
            name: input,
            date: new Date().toLocaleString(),
        })
    }

    const saveItem = () => {
        console.log('test', newItem)
        database()
            .ref(`/users/${ localId }/items`)
            .update({ ...newItem })
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