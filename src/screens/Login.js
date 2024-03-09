import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Dimensions,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'

import { useLoginMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/authSchema'
import EventButton from '../components/EventButton'
import InputForm from '../components/InputForm'
import colors from '../utils/globals/colors'

const Login = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const [ triggerLogin ] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
        try {
            loginSchema.validateSync({ email, password })
            const { data } = await triggerLogin({ email, password })
            dispatch(setUser({ email: data.email, idToken: data.idToken }))
            Keyboard.dismiss()
        } catch (error) {
            setEmailError('')
            setPasswordError('')
            switch(error.path){
                case 'email':
                    setEmailError(error.message)
                    break
                case 'password':
                    setPasswordError(error.message)
                    break
                default:
                    break
            }
        }
    }

    return (
        <ScrollView style = {[ styles.loginContainer, { width: windowWidth - 20 } ]}>
            <Text style = { styles.optionText }>Ingresa tus credenciales</Text>
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
                title = 'Iniciar sesión'
            />
            <Text style = { styles.optionText }>¿Olvidaste tu contraseña?</Text>
            <EventButton
                // onPress={() => {
                //     navigation.navigate('Signup')
                // }}
                title = 'Recuperar contraseña'
            />
            <Text style = { styles.optionText }>¿No tienes una cuenta?</Text>
            <EventButton
                onPress = {() => {
                    navigation.navigate('Signup')
                }}
                title = 'Registrarse'
            />
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        paddingVertical: 20
    },
    optionText: {
        alignSelf: 'center',
        color: colors.text,
        fontSize: 16,
        paddingVertical: 10
    }
})