import { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import EventContainer from '../components/EventContainer'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import SearchBar from '../components/SearchBar'

import itemsData from '../utils/data/itemsData.json'

const ItemListContainer = ({
    navigation,
    route,
}) => {

    const {categorySelected} = route.params

    // búsqueda de item

    const [keyWord, setKeyWord] = useState('')
    const [itemFilter, setItemFilter] = useState([])
    const keyWordHandler = (text) => {
        setKeyWord(text)
    }

    useEffect(() => 
        {
            if (categorySelected) {setItemFilter(itemsData.filter(item => item.category === categorySelected))}
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
            {/* <EventContainer /> */}
            <SearchBar
                keyWordHandler={keyWordHandler}
            />
            <View style={styles.itemByCategory}>
                <FlatList
                    data={itemFilter}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <ItemList
                            item={item}
                            navigation={navigation}
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