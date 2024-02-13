import {
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

import EventButton from './EventButton'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Item = ({
    item,
    onHandleModal,
    updatePaidStatus,
    screenWidth,
}) => {
    return (
        <View style={[styles.itemCard, {width: screenWidth - 20}]}>
            <Text style={styles.itemText}>Glosa :    {item.name}</Text>
            <Text style={styles.itemText}>Monto :    {item.amount}</Text>
            <View style={styles.switchContainer}>
                <Text style={styles.itemText}>Estado de Pago: </Text>
                <Switch
                    value={item.paid}
                    onValueChange={() => updatePaidStatus(item.id)}
                />
            </View>
            <EventButton
                onPress={() => onHandleModal(item)}
                screenWidth={screenWidth}
                title='Editar'
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
        fontFamily: fonts.bold,
        fontSize: 16,
        paddingHorizontal: 20,
    },

    switchContainer: {
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },

})