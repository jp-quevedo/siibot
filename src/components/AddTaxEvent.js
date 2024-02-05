import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

import EventButton from './EventButton'

const AddTaxEvent = ({
    onHandleAddName,
    onHandleAddAmount,
    newTaxEvent,
    addTaxEvent,
}) => {
    return (
        <View style={styles.taxEventHandleContainer}>
            <TextInput 
                maxLength={28}
                onChangeText={onHandleAddName}
                placeholder='GLOSA'
                placeholderTextColor='#E1E1E1'
                style={styles.textInput}
                value={newTaxEvent.name}
            />
            <TextInput
                maxLength={10}
                onChangeText={onHandleAddAmount}
                placeholder='MONTO'
                placeholderTextColor='#E1E1E1'
                style={styles.textInput}
                value={newTaxEvent.amount}
            />
            <EventButton title='AGREGAR' onPress={addTaxEvent} />
        </View>
    )
}

export default AddTaxEvent

const styles = StyleSheet.create({

    taxEventHandleContainer: {
        backgroundColor: '#202020',
        borderRadius: 10,
        flexDirection: 'column',
        paddingVertical: 20,
        width: '95%'
    },
    
    textInput: {
        alignSelf: 'center',
        backgroundColor: '#494949',
        borderColor: '#494949',
        borderRadius: 10,
        color: '#E1E1E1',
        marginBottom: 10,
        padding: 10,
        width: '90%',
    },

})