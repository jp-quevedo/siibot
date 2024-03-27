import { useState } from 'react'
import {
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'

import EventButton from './EventButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Order = ({
    order
}) => {

    const windowWidth = Dimensions.get('window').width

    return (
        <ScrollView style = {[ styles.orderCard, { width: windowWidth - 20 } ]}>
            <Text style = { styles.orderText }>Año :    { order.name }</Text>
            <Text style = { styles.orderText }>Total del Ejercicio :    { order.total }</Text>
            <Text style = { styles.orderText }>Resultado :    { order.taxes }</Text>
            <Text style = { styles.orderText }>Operaciones :</Text>
            <View style = {[ styles.container, { width: windowWidth - 60 } ]}>
                <FlatList
                    data = { order.items }
                    horizontal = { true }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {({ item, index }) =>
                        <View style = {[ styles.itemByCategory, { width: windowWidth - 100 } ]}>
                            <Text style = { styles.itemTitle }>{ item.name }</Text>
                        </View>
                    }
                />
            </View>
            <EventButton
                // onPress = {}
                title = 'Exportar'
            />
        </ScrollView>
    )
}

export default Order

const styles = StyleSheet.create({
    orderCard: {
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    orderText:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        paddingHorizontal: 20
    },
    container: {
        alignSelf: 'center'
    },
    itemByCategory: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        width: 'auto'
    },
    itemTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        margin: 0,
        padding: 0
    }
})