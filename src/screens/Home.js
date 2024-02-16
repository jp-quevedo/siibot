import {
    StyleSheet,
    View,
} from 'react-native'

import CategoriesContainer from '../components/CategoriesContainer'
import Header from '../components/Header'

const Home = ({selectedCategoryState, windowWidth}) => {
    return (
        <View style={styles.home}>
            <Header
                windowWidth={windowWidth}
                title='Bienvenido'
            />
            <CategoriesContainer
                windowWidth={windowWidth}
                selectedCategoryState={selectedCategoryState}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home:{
        alignItems: 'center',
    },
})