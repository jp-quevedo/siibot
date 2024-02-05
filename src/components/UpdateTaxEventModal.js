import {
    Modal,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

import EventButton from './EventButton'

const UpdateTaxEventModal = ({
    modalVisible,
    taxEventSelected,
    deleteTaxEvent,
    onHandleModal,
    saveUpdateTaxEvent,
    onHandleUpdateName,
    onHandleUpdateAmount
}) => {
    return (
        <Modal
            visible={modalVisible}
            animationType='slide'
            onRequestClose={() => onHandleModal({})}
        >
            <View style={styles.taxEventModal}>
            <TextInput 
                maxLength={28}
                onChangeText={onHandleUpdateName}
                placeholder='GLOSA'
                placeholderTextColor='#E1E1E1'
                style={styles.textInput}
                value={taxEventSelected.name}
            />
            <TextInput
                maxLength={10}
                onChangeText={onHandleUpdateAmount}
                placeholder='MONTO'
                placeholderTextColor='#E1E1E1'
                style={styles.textInput}
                value={taxEventSelected.amount}
            />
            <EventButton title='GUARDAR' onPress={() => saveUpdateTaxEvent(taxEventSelected)} />
            <EventButton title='BORRAR' onPress={deleteTaxEvent} />
            <EventButton title='CANCELAR' onPress={() => onHandleModal({})} />
        </View>
        </Modal>
    )
}

export default UpdateTaxEventModal

const styles = StyleSheet.create({

    taxEventModal: {
        alignSelf: 'center',
        backgroundColor: '#202020',
        borderColor: '#202020',
        borderRadius: 10,
        gap: 20,
        justifyContent: 'center',
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20,
        width: '95%',
    },

    textInput: {
        alignSelf: 'center',
        backgroundColor: '#494949',
        borderColor: '#494949',
        borderRadius: 10,
        color: '#E1E1E1',
        padding: 10,
        width: '90%',
    },

    taxEventText: {
        color: '#E1E1E1',
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 20,
    }

})