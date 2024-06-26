import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    Dimensions,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'
import { getDatabase, ref, update } from 'firebase/database'

import { app } from '../utils/data/index'
import { deleteSession, insertSession } from '../utils/db'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../utils/validations/authSchema'
import { useSignupMutation } from '../app/services/auth'
import EventButton from '../components/EventButton'
import InputForm from '../components/InputForm'
import colors from '../utils/globals/colors'

const Signup = ({
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width

    const [ name, setName ] = useState('')
    const [ dni, setDni ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ nameError, setNameError ] = useState('')
    const [ dniError, setDniError ] = useState('')
    const [ addressError, setAddressError ] = useState('')
    const [ phoneNumberError, setPhoneNumberError ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    const [ triggerSignup ] = useSignupMutation()
    const dispatch = useDispatch()
    const onSubmit = async () => {
        try {
            signupSchema.validateSync({ name, dni, address, phoneNumber, email, password })
            const { data } = await triggerSignup({ email, password })
            const newUser = {
                name: name,
                dni: dni,
                location: { address: address },
                phoneNumber: phoneNumber,
                email: email
            }
            const db = getDatabase(app)
            const userRef = ref(db, `/users/${ data.localId }`)
            update(userRef, { ...newUser })
            deleteSession()
            insertSession(data)
            dispatch(setUser({
                email: data.email,
                idToken: data.idToken,
                localId: data.localId
            }))
            Keyboard.dismiss()
        } catch (error) {
            setNameError('')
            setDniError('')
            setAddressError('')
            setPhoneNumberError('')
            setEmailError('')
            setPasswordError('')
            switch(error.path){
                case 'name':
                    setNameError(error.message)
                    break
                case 'dni':
                    setDniError(error.message)
                    break
                case 'address':
                    setAddressError(error.message)
                    break
                case 'phoneNumber':
                    setPhoneNumberError(error.message)
                    break
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
        <ScrollView style = {[ styles.signupContainer, { width: windowWidth - 20 } ]}>
            <Text style = { styles.optionText }>Registra tus datos</Text>
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
                label = 'Dirección'
                value = { address }
                onChangeText = { (t) => setAddress(t) }
                sensitiveInfo = { false }
                warning = { addressError }
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
                title = 'Registrarse'
            />
            <Text style = { styles.optionText }>¿Ya tienes una cuenta?</Text>
            <EventButton
                onPress = {() => {
                    navigation.navigate('Login')
                }}
                title = 'Iniciar Sesión'
            />
        </ScrollView>
    )
}

export default Signup

const styles = StyleSheet.create({
    signupContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        gap: 10,
        marginBottom: 20,
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