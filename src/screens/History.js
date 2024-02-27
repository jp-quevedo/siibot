import { useState } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
} from 'react-native'

import SearchBar from '../components/SearchBar'

const History = () => {

    const windowWidth = Dimensions.get('window').width

    const [keyWord, setKeyWord] = useState('')
    const keyWordHandler = (text) => {
        setKeyWord(text)
    }

    return (
        <View style={[styles.historyContainer, {width: windowWidth - 20}]}>
            <SearchBar 
                keyWordHandler={keyWordHandler}
            />
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