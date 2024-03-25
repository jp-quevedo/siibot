import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'

import { useGetCategoriesQuery } from '../app/services/items'
import Categories from './Categories'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CategoriesContainer = ({
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width
    const { data: categories } = useGetCategoriesQuery()

    return (
        <View style = {[ styles.categoriesContainer, { width: windowWidth - 20 } ]}>
            <Text style = { styles.title }>
                    Explorar por Categoría
                </Text>
            <FlatList
                    data = { categories }
                    keyExtractor = { item => item }
                    renderItem = {({ item }) => <Categories
                        item = { item }
                        navigation = { navigation }
                    />}
            />
        </View>
    )
}

export default CategoriesContainer

const styles = StyleSheet.create({
    categoriesContainer: {
        backgroundColor: colors.container,
        borderRadius: 16,
        marginTop: 20,
        paddingTop: 20
    },
    title: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 18,
        paddingBottom: 20,
        textAlign: 'center'
    }
})