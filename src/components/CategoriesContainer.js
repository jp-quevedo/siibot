import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native'

import Categories from './Categories'

import categories from '../utils/data/categories.json'
import colors from '../utils/globals/colors'

const CategoriesContainer = ({screenWidth, selectedCategoryState}) => {
    return (
        <View style={[styles.categoriesContainer, {width: screenWidth - 20}]}>
            <FlatList
                    data={categories}
                    keyExtractor={item => item}
                    renderItem={({item}) => <Categories
                        item={item}
                        screenWidth={screenWidth}
                        selectedCategoryState={selectedCategoryState}
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
    }

})