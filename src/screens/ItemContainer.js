import { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Header from '../components/Header'
import Item from '../components/Item'

import itemsData from '../utils/data/itemsData.json'

const ItemContainer = ({
    itemSelected,
    windowWidth,
    // modal
    modalVisible,
    setItemSelected,
    setModalVisible,
}) => {

    const [item, setItem] = useState({})
    useEffect(() => 
        {
            const itemFound = itemsData.find(item => item.id === itemSelected)
            setItem(itemFound)
        },
        [itemSelected]
    )

    return (
        <View style={styles.itemContainer}>
            <Header
                title={item.name}
                windowWidth={windowWidth}
            />
            <Item
                item={item}
                windowWidth={windowWidth}
                // modal
                itemSelected={itemSelected}
                modalVisible={modalVisible}
                setItemSelected={setItemSelected}
                setModalVisible={setModalVisible}
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