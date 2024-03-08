import {
    StyleSheet,
    View
} from 'react-native'

import CategoriesContainer from '../components/CategoriesContainer'

const Home = ({ navigation }) => {
    return (
        <View style = { styles.home }>
            <CategoriesContainer
                navigation = { navigation }
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
        alignItems: 'center'
    }
})