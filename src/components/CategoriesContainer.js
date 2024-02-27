import {
    Dimensions,
    FlatList,
    StyleSheet,
    View,
} from 'react-native'
import { useSelector } from 'react-redux'

import Categories from './Categories'

import colors from '../utils/globals/colors'

const CategoriesContainer = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width
    const categories = useSelector(state => state.itemReducer.value.categories)
    
    return (
        <View style={[styles.categoriesContainer, {width: windowWidth - 20}]}>
            <FlatList
                    data={categories}
                    keyExtractor={item => item}
                    renderItem={({item}) => <Categories
                        item={item}
                        navigation={navigation}
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