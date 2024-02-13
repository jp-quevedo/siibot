import { useState } from 'react'
import {
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../utils/globals/colors'

const SearchBar = ({keyWordHandler, screenWidth}) => {

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const inputHandler = (text) => setInput(text)

    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(expression.test(input)){
            setError('Characters not supported for searching')
            return
        }
        keyWordHandler(input)
        setError('')
        Keyboard.dismiss()
    }

    const reset = () => {
        inputHandler('')
        keyWordHandler('')
        setError('')
        Keyboard.dismiss()
    }

    return (
        <View>
            <View style={[styles.searchBarContainer, {width: screenWidth - 20}]}>
                <TextInput
                    maxLength={20}
                    onChangeText={inputHandler}
                    placeholder='Buscar'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: screenWidth - 60}]}
                    value={input}
                />
                <Pressable onPress={search}>
                    <MaterialIcons name='search' size={30} color='white' />
                </Pressable>
                <Pressable onPress={reset}>
                    <MaterialIcons name='close' size={30} color='white' />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({

    searchBarContainer: {
        backgroundColor: colors.container,
        borderRadius: 16,
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 20,
    },

    textInput: {
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 8,
        marginBottom: 10,
        padding: 10,
    },

    errorText:{
        color: colors.error,
        paddingHorizontal: 10,
    }

})