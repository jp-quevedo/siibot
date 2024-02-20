import { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Item from '../components/Item'

import itemsData from '../utils/data/itemsData.json'

const ItemContainer = ({route}) => {

    const {itemId} = route.params
    const [item, setItem] = useState({})
    useEffect(() => {
        const itemFound = itemsData.find(item => item.id === itemId)
        setItem(itemFound)
    },[itemId])

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
    },
})