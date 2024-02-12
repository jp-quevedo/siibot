import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import Item from './Item'
import ItemUpdateModal from './ItemUpdateModal'

const ItemContainer = ({
    itemList,
    onHandleModal,
    screenWidth,

    deleteItem,
    itemSelected,
    modalVisible,
    onHandleUpdateAmount,
    onHandleUpdateName,
    saveItemUpdate,
    updatePaidStatus,
}) => {
    return (
        <View style={[styles.itemListContainer, {width: screenWidth - 20}]}>
            <FlatList
                data={itemList}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Item
                        item={item}
                        onHandleModal={onHandleModal}
                        updatePaidStatus={updatePaidStatus}
                        screenWidth={screenWidth}
                    />
                )}
            />
            <ItemUpdateModal 
                deleteItem={deleteItem}
                itemSelected={itemSelected}
                modalVisible={modalVisible}
                onHandleUpdateAmount={onHandleUpdateAmount}
                onHandleUpdateName={onHandleUpdateName}
                onHandleModal={onHandleModal}
                saveItemUpdate={saveItemUpdate}
                screenWidth={screenWidth}
            />
        </View>
    )
}

export default ItemContainer

const styles = StyleSheet.create({

    itemListContainer: {
        flex: 9,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        margin: 10,
    },

})