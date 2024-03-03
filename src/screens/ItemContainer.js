import {useEffect, useState} from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import {useSelector} from 'react-redux'

import Item from '../components/Item'

const ItemContainer = () => {

    const [item, setItem] = useState({})
    const itemSelected = useSelector(state => state.itemReducer.value.itemIdSelected)
    useEffect(() => {
        setItem(itemSelected)
    }, [itemSelected])

    return (
        <View style={styles.itemContainer}>
            <Item
                item={item}
            />
        </View>
    )
}

export default ItemContainer

const styles = StyleSheet.create({
    itemContainer:{
        alignItems: 'center',
        gap: 20
    }
})