import {
    StyleSheet,
    View,
} from 'react-native'
import { useDispatch } from 'react-redux'

import { setCategorySelected } from '../features/item/itemSlice'
import EventButton from './EventButton'

const Categories = ({
    item,
    navigation,
}) => {

    const dispatch = useDispatch()

    return (
        <View style={styles.categories}>
            <EventButton
                onPress={() => {
                    dispatch(setCategorySelected(item))
                    navigation.navigate('ItemListContainer', {categorySelected: item})
                }}
                title={item}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories:{
        marginBottom: 20,
    },
})