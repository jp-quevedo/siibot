import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemList = ({item, selectedItemState, windowWidth}) => {
    return (
        <Pressable
            onPress={() => selectedItemState(item.id)}
            style={[styles.itemListContainer, {width: windowWidth - 20}]}
            title='Detalle'
        >
            <MaterialIcons name='info-outline' size={30} color='white' style={styles.itemIcon}/>
            <Text style={styles.itemName}>{item.name}</Text>
        </Pressable>
    )
}

export default ItemList

const styles = StyleSheet.create({
    itemListContainer:{
        alignItems: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 20,
        paddingVertical: 20,
    },
    itemName:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    itemIcon:{
        marginHorizontal: 20,
        minWidth: 30,
        minHeight: 30,
    },
})