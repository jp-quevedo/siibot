import {
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from 'react-native'

import Categories from './Categories'
import colors from '../utils/globals/colors'
import {useGetCategoriesQuery} from '../app/services/events'

const CategoriesContainer = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width
    const {data: categories} = useGetCategoriesQuery()

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
        paddingTop: 20
    }
})