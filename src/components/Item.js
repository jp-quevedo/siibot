import {
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

import EventButton from './EventButton'

import colors from '../utils/globals/colors'

const Item = ({
    item,
    onHandleModal,
    updatePaidStatus,
    screenWidth,
}) => {
    return (
        <View style={[styles.itemCard, {width: screenWidth - 20}]}>
            <Text style={styles.itemText}>GLOSA :    {item.name}</Text>
            <Text style={styles.itemText}>MONTO :    {item.amount}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.itemText}>ESTADO DE PAGO: </Text>
                <Switch
                    value={item.paid}
                    onValueChange={() => updatePaidStatus(item.id)}
                />
            </View>
            <EventButton
                onPress={() => onHandleModal(item)}
                screenWidth={screenWidth}
                title='EDITAR'
            />
        </View>
    )
}

export default Item

const styles = StyleSheet.create({

    itemCard: {
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginBottom: 10,
        paddingVertical: 20,
    },

    itemText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 20,
    },

    switchContainer: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },

})