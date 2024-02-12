import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

import EventButton from './EventButton'

import colors from '../utils/globals/colors'

const EventContainer = ({
    addItem,
    newItem,
    onHandleAddAmount,
    onHandleAddName,
    screenWidth,
}) => {
    return (
        <View style={[styles.itemHandleContainer, {width: screenWidth - 20}]}>
            <TextInput 
                maxLength={20}
                onChangeText={onHandleAddName}
                placeholder='GLOSA'
                placeholderTextColor={colors.text}
                style={[styles.textInput, {width: screenWidth - 60}]}
                value={newItem.name}
            />
            <TextInput
                maxLength={10}
                onChangeText={onHandleAddAmount}
                placeholder='MONTO'
                placeholderTextColor={colors.text}
                style={[styles.textInput, {width: screenWidth - 60}]}
                value={newItem.amount}
            />
            <EventButton
                onPress={addItem}
                screenWidth={screenWidth}
                title='AGREGAR'
            />
        </View>
    )
}

export default EventContainer

const styles = StyleSheet.create({

    itemHandleContainer: {
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        marginTop: 10,
        paddingVertical: 20,
    },
    
    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
    },

})