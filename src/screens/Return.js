import { useSelector } from 'react-redux'
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { useGetItemsQuery } from '../app/services/items'
import ItemList from '../components/ItemList'
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Return = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const { data: items } = useGetItemsQuery(localId)

    return (
        <View style = {[ styles.returnContainer, { width: windowWidth - 20 } ]}>
            <FlatList
                data = { items }
                keyExtractor = { item => item.id }
                renderItem = {({ item }) =>
                    <ItemList
                        item = { item }
                        navigation = { navigation }
                    />
                }
            />
            <View style = { styles.summaryContainer }>
                <Text style = { styles.totalReturn }>
                    Balance Total: $1
                </Text>
                <EventButton
                    // onPress={}
                    title = 'Generar Declaración'
                />
            </View>
        </View>
    )
}

export default Return

const styles = StyleSheet.create({
    returnContainer: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    summaryContainer: {
        alignItems: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    totalReturn: {
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 18
    }
})