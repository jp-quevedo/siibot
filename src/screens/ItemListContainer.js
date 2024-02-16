import { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import Header from '../components/Header'
import ItemList from '../components/ItemList'
import SearchBar from '../components/SearchBar'

import items from '../utils/data/items.json'

const ItemListContainer = ({categorySelected, selectedItemState, windowWidth}) => {

    const [keyWord, setKeyWord] = useState('')
    const [itemFilter, setItemFilter] = useState([])

    const keyWordHandler = (text) => {
        setKeyWord(text)
    }

    useEffect(() => 
        {
            if (categorySelected) {setItemFilter(items.filter(item => item.category === categorySelected))}
            if (keyWord) {setItemFilter(itemFilter.filter(item => {
                const itemName = item.name.toLowerCase()
                const keyWordInput = keyWord.toLowerCase()
                return itemName.includes(keyWordInput)
            }))}
        },
        [categorySelected, keyWord]
    )

    return (
        <View>
            <Header
                title={categorySelected}
                windowWidth={windowWidth}
            />
            <SearchBar
                keyWordHandler={keyWordHandler}
                windowWidth={windowWidth}
            />
            <View style={styles.itemByCategory}>
                <FlatList
                    data={itemFilter}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <ItemList
                            item={item}
                            selectedItemState={selectedItemState}
                            windowWidth={windowWidth}
                        />
                    }
                />
            </View>
        </View>
    )
}

export default ItemListContainer

const styles = StyleSheet.create({
    itemByCategory:{
        alignItems: 'center',
    },
})