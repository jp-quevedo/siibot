import {
    Image,
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'

import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ItemList = ({item, itemIdSelected, screenWidth}) => {

    return (
        <Pressable
            onPress={() => itemIdSelected(item.id)}
            screenWidth={screenWidth}
            style={[styles.itemListContainer, {width: screenWidth - 20}]}
            title='Detalle'
        >
            <Image
                source={{uri: 'https://cdn-icons-png.freepik.com/512/929/929446.png?ga=GA1.1.1433597810.1707753757&'}}
                style={styles.itemIcon}
                resizeMode='cover'
            />
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
    }

})