import {
    Dimensions,
    Keyboard,
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import uuid from 'react-native-uuid'

import EventButton from './EventButton'
import colors from '../utils/globals/colors'

// falta corregir lógica de eventos
const EventContainer = () => {

    const windowWidth = Dimensions.get('window').width

    const [ newItem, setNewItem ] = useState({
        id: '',
        category: '',
        name: '',
        amount: '',
        date: '',
        paid: '',
    })

    const addItem = () => {
        setItemList([ ...itemList, newItem ])
        setNewItem({
            id: '',
            category: '',
            name: '',
            amount: '',
            date: '',
            paid: '',
        })
        Keyboard.dismiss()
    }

    const onHandleAddAmount = (input) => {
        setNewItem({ ...newItem, amount: input })
    }
    
    const onHandleAddName = (input) => {
        setNewItem({
            ...newItem,
            id: uuid.v4(),
            category: 'IVA',
            name: input,
            date: new Date().toLocaleString(),
            paid: false,
        })
    }

    return (
        <View style = {[ styles.itemHandleContainer, { width: windowWidth - 20 } ]}>
            <TextInput 
                maxLength = { 20 }
                onChangeText = { onHandleAddName }
                placeholder = 'Glosa'
                placeholderTextColor = { colors.text} 
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
                onPress = { addItem }
                title = 'Agregar'
            />
        </View>
    )
}

export default EventContainer

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