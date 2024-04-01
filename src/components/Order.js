import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { useGetUserQuery } from '../app/services/user'
import EventButton from './EventButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Order = ({
    order
}) => {

    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const { data: user } = useGetUserQuery(localId)
    const [ userData, setUserData ] = useState('')

    useEffect(() => {
        const fetchUser = () => {
            if (user) {
                setUserData(user)
            }
        }
        fetchUser()
    }, [ user, userData ])

    return (
        <ScrollView style = {[ styles.orderCard, { width: windowWidth - 20 } ]}>
            <Text style = { styles.orderText }>Nombre :    { userData.name }</Text>
            <Text style = { styles.orderText }>Rut :    { userData.dni }</Text>
            <Text style = { styles.orderText }>Dirección :    { userData.address }</Text>
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
        alignSelf: 'center',
        overflow: 'hidden',
        paddingVertical: 20
    },
    itemByCategory: {
        alignItems: 'center',
        backgroundColor: colors.input,
        borderRadius: 36,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginRight: 20,
        padding: 10,
        width: 'min-content'
    },
    itemTitle: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        margin: 10,
        padding: 0,
    }
})