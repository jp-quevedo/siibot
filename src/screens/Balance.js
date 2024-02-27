import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { useSelector } from 'react-redux'

import ItemList from '../components/ItemList'
import EventButton from '../components/EventButton'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Balance = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width

    const itemsFilterByCategory = useSelector(state => state.itemReducer.value.itemsFilterByCategory)

    return (
        <View style={[styles.balanceContainer, {width: windowWidth - 20}]}>
            <FlatList
                data={itemsFilterByCategory}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                    <ItemList
                        item={item}
                        navigation={navigation}
                    />
                }
            />
            <View style={styles.summaryContainer}>
                <Text style={styles.totalBalance}>
                    Balance Total: $1
                </Text>
                <EventButton
                    // onPress={}
                    title='Generar Declaración'
                />
            </View>
        </View>
    )
}

export default Balance

const styles = StyleSheet.create({
    balanceContainer:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
    summaryContainer:{
        alignItems: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20,
    },
    totalBalance:{
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 18,
    },
})