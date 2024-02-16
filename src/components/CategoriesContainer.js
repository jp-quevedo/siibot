import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import Categories from './Categories'

import categories from '../utils/data/categories.json'
import colors from '../utils/globals/colors'

const CategoriesContainer = ({selectedCategoryState, windowWidth}) => {
    return (
        <View style={[styles.categoriesContainer, {width: windowWidth - 20}]}>
            <FlatList
                    data={categories}
                    keyExtractor={item => item}
                    renderItem={({item}) => <Categories
                        item={item}
                        selectedCategoryState={selectedCategoryState}
                        windowWidth={windowWidth}
                    />}
            />
        </View>
    )
}

export default CategoriesContainer

const styles = StyleSheet.create({
    categoriesContainer:{
        alignItems: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        justifyContent: 'center',
        marginTop: 20,
        paddingTop: 20,
    },
})