import {useState} from 'react'
import {
    Dimensions,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import colors from '../utils/globals/colors'

const SearchBar = ({keyWordHandler}) => {

    const windowWidth = Dimensions.get('window').width

    const [error, setError] = useState('')
    const [input, setInput] = useState('')

    const inputHandler = (text) => setInput(text)

    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        if(expression.test(input)){
            setError('Buscar exclusivamente con letras y/o números.')
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
            <View style={[styles.searchBarContainer, {width: windowWidth - 20}]}>
                <TextInput
                    maxLength={20}
                    onChangeText={inputHandler}
                    placeholder='Buscar'
                    placeholderTextColor={colors.text}
                    style={[styles.textInput, {width: windowWidth - 140}]}
                    value={input}
                />
                <Pressable onPress={search} style={styles.button}>
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
    searchBarContainer:{
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 48,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 20
    },
    textInput:{
        alignSelf: 'center',
        backgroundColor: colors.input,
        borderColor: colors.input,
        borderRadius: 32,
        padding: 10
    },
    errorText:{
        alignSelf: 'center',
        color: colors.error,
        margin: 0,
        paddingTop: 15
    },
    button:{
        paddingHorizontal: 10
    }
})