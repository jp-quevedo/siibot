import { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Header from '../components/Header'
import Item from '../components/Item'

import items from '../utils/data/items.json'

const ItemContainer = ({
    onHandleModal,
    windowWidth,
    // modal
    deleteItem,
    itemSelected,
    modalVisible,
    onHandleUpdateAmount,
    onHandleUpdateName,
    saveItemUpdate,
    updatePaidStatus,
}) => {

    const [item, setItem] = useState({})
    useEffect(() => 
        {
            const itemFound = items.find(item => item.id === itemSelected)
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
                onHandleModal={onHandleModal}
                updatePaidStatus={updatePaidStatus}
                windowWidth={windowWidth}
                // modal
                deleteItem={deleteItem}
                itemSelected={itemSelected}
                modalVisible={modalVisible}
                onHandleUpdateAmount={onHandleUpdateAmount}
                onHandleUpdateName={onHandleUpdateName}
                saveItemUpdate={saveItemUpdate}
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