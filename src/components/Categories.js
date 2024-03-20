import {
    StyleSheet,
    View
} from 'react-native'

import EventButton from './EventButton'

const Categories = ({
    item,
    navigation
}) => {

    return (
        <View style = { styles.categories }>
            <EventButton
                onPress = {() => {
                    navigation.navigate('ItemListContainer', { categorySelected: item })
                }}
                title = { item }
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories: {
        marginBottom: 20
    }
})