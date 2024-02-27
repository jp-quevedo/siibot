import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native'

import SearchBar from '../components/SearchBar'

const History = () => {

    const windowWidth = Dimensions.get('window').width

    return (
        <View style={[styles.historyContainer, {width: windowWidth - 20}]}>
            <SearchBar />
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    historyContainer:{
        alignSelf: 'center',
        justifyContent: 'center',
    },
})