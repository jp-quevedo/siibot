import {
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import { setItemIdSelected } from '../features/item/itemSlice'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemList = ({item, navigation}) => {

    const windowWidth = Dimensions.get('window').width

    const dispatch = useDispatch()
    
    return (
        <Pressable
            onPress={() => {
                dispatch(setItemIdSelected(item))
                navigation.navigate('ItemContainer', {itemId: item.id})
            }}
            style={[styles.itemListContainer, {width: windowWidth - 20}]}
            title='Detalle'
        >
            <MaterialIcons name='info-outline' size={30} color='white' style={styles.itemIcon}/>
            <Text style={styles.itemTitle}>{item.title}</Text>
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
    itemTitle:{
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    itemIcon:{
        marginHorizontal: 20,
    },
})