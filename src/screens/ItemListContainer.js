import { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native'
import { useSelector } from 'react-redux'

import EventContainer from '../components/EventContainer'
import ItemList from '../components/ItemList'
import SearchBar from '../components/SearchBar'

const ItemListContainer = ({
    navigation
}) => {

    const [ itemFilter, setItemFilter ] = useState([])    
    const [ keyWord, setKeyWord ] = useState('')
    
    const keyWordHandler = (text) => { setKeyWord(text) }
    useEffect(() => {
        const itemsFilter = itemsFilterByCategory.filter((item) =>
            item.title.toLowerCase().includes(keyWord) || item.title.toUpperCase().includes(keyWord)
        )
        setItemFilter(itemsFilter)
    }, [ itemsFilterByCategory, keyWord ])
    const itemsFilterByCategory = useSelector(state => state.itemReducer.value.itemsFilterByCategory)

    return (
        <View>
            {/* <EventContainer /> */}
            <SearchBar
                keyWordHandler = { keyWordHandler }
            />
            <View style = { styles.itemByCategory }>
                <FlatList
                    data = { itemFilter }
                    keyExtractor = { item => item.id }
                    renderItem = {({ item }) =>
                        <ItemList
                            item = { item }
                            navigation = { navigation }
                        />
                    }
                />
            </View>
        </View>
    )
}

export default ItemListContainer

const styles = StyleSheet.create({
    itemByCategory: {
        alignItems: 'center'
    }
})