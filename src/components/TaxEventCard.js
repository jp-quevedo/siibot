import {
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

import EventButton from './EventButton'

const TaxEventCard = ({
    item,
    onHandleModal,
    updatePaidStatus,
}) => {
    return (
        <View style={styles.taxEventCard}>
            <Text style={styles.taxEventText}>GLOSA :    {item.name}</Text>
            <Text style={styles.taxEventText}>MONTO :    {item.amount}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.taxEventText}>ESTADO DE PAGO: </Text>
                <Switch
                    value={item.paid}
                    onValueChange={() => updatePaidStatus(item.id)}
                />
            </View>
            <EventButton title='EDITAR' onPress={() => onHandleModal(item)}/>
        </View>
    )
}

export default TaxEventCard

const styles = StyleSheet.create({

    taxEventCard: {
        backgroundColor: '#202020',
        borderColor: '#202020',
        borderRadius: 10,
        borderWidth: 2,
        gap: 15,
        height: 'auto',
        marginBottom: 10,
        paddingVertical: 20,
        width: '100%',
    },

    taxEventText: {
        color: '#E1E1E1',
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 20,
    },

    switchContainer: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },

})