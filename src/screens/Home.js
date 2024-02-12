import {
    StyleSheet,
    View,
} from 'react-native'

import CategoriesContainer from '../components/CategoriesContainer'
import Header from '../components/Header'

const Home = ({screenWidth, selectedCategoryState}) => {
    return (
        <View style={styles.home}>
            <Header
                screenWidth={screenWidth}
                title='Bienvenido'
            />
            <CategoriesContainer
                screenWidth={screenWidth}
                selectedCategoryState={selectedCategoryState}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    home:{
        alignItems: 'center',
    }

})