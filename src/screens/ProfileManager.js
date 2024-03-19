import { useState } from 'react'
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'

import EventButton from '../components/EventButton'
import InputForm from '../components/InputForm'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProfileManager = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const [ name, setName ] = useState('')
    const [ dni, setDni ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ nameError, setNameError ] = useState('')
    const [ dniError, setDniError ] = useState('')
    const [ phoneNumberError, setPhoneNumberError ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const onSubmit = async () => {

    }

    return (
        <ScrollView style = {[ styles.profManContainer, { width: windowWidth - 20 } ]}>
            <Text style = { styles.optionText }>Actualiza tus credenciales</Text>
            <InputForm
                label = 'Nombre'
                value = { name }
                onChangeText = { (t) => setName(t) }
                sensitiveInfo = { false }
                warning = { nameError }
            />
            <InputForm
                label ='Rut'
                value = { dni }
                onChangeText = { (t) => setDni(t) } 
                sensitiveInfo = { false }
                warning = { dniError }
            />
            <InputForm
                label = 'Teléfono'
                value = { phoneNumber }
                onChangeText = { (t) => setPhoneNumber(t) } 
                sensitiveInfo = { false }
                warning = { phoneNumberError }
            />
            <InputForm
                label = 'Email'
                value = { email }
                onChangeText = { (t) => setEmail(t) }
                sensitiveInfo = { false }
                warning = { emailError }
            />
            <InputForm
                label = 'Contraseña'
                value = { password }
                onChangeText = { (t) => setPassword(t) }
                sensitiveInfo = { true }
                warning = { passwordError }
            />
            <EventButton
                onPress = { onSubmit }
                title = 'Actualizar'
            />
            <Text style = { styles.optionText }>Para poder generar una declaración necesitas verificar tu dirección</Text>
            <EventButton
                onPress = {() => {
                    navigation.navigate('LocationManager')
                }}
                title = 'Verificar Dirección'
            />
        </ScrollView>
    )
}

export default ProfileManager

const styles = StyleSheet.create({
    profManContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        maxHeight: 550,
    },
    optionText: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        padding: 20,
        textAlign: 'center'
    }
})