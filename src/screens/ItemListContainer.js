import { useEffect, useState } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import Header from '../components/Header'
import ItemList from '../components/ItemList'

import items from '../utils/data/items.json'

const ItemListContainer = ({categorySelected, screenWidth}) => {

    const [itemFilter, setItemFilter] = useState([])

    useEffect(() => 
        {
            setItemFilter(items.filter(item => item.category === categorySelected))
        },
        [categorySelected]
    )

    return (
        <View>
            <Header title={categorySelected} />
            <View style={styles.itemByCategory}>
                <FlatList
                    data={itemFilter}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <ItemList
                            item={item}
                            screenWidth={screenWidth}
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
    }
})