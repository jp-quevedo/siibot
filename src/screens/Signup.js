import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'

import {useSignupMutation} from '../app/services/auth'
import {setUser} from '../features/auth/authSlice'
import EventButton from '../components/EventButton'
import InputForm from '../components/InputForm'
import colors from '../utils/globals/colors'

const Signup = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width

    const [name, setName] = useState('')
    const [dni, setDni] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerSignup] = useSignupMutation()

    const dispatch = useDispatch()
    const onSubmit = async () => {
        const {data} = await triggerSignup({email, password})
        dispatch(setUser({email: data.email, idToken: data.idToken}))
    }

    return (
        <View style={[styles.signupContainer, {width: windowWidth - 20}]}>
            <Text style={styles.optionText}>Registra tus credenciales</Text>
            <InputForm
                label='Nombre'
                value={name}
                onChangeText={(t) => setName(t)}
                sensitiveInfo={false}
                warning=''
            />
            <InputForm
                label='Rut'
                value={dni}
                onChangeText={(t) => setDni(t)}
                sensitiveInfo={false}
                warning=''
            />
            <InputForm
                label='Dirección'
                value={address}
                onChangeText={(t) => setAddress(t)}
                sensitiveInfo={false}
                warning=''
            />
            <InputForm
                label='Teléfono'
                value={phoneNumber}
                onChangeText={(t) => setPhoneNumber(t)}
                sensitiveInfo={false}
                warning=''
            />
            <InputForm
                label='Email'
                value={email}
                onChangeText={(t) => setEmail(t)}
                sensitiveInfo={false}
                warning=''
            />
            <InputForm
                label='Contraseña'
                value={password}
                onChangeText={(t) => setPassword(t)}
                sensitiveInfo={true}
                warning=''
            />
            <EventButton
                onPress={onSubmit}
                title='Registrarse'
            />
            <Text style={styles.optionText}>¿Ya tienes una cuenta?</Text>
            <EventButton
                onPress={() => {
                    navigation.navigate('Login')
                }}
                title='Iniciar sesión'
            />
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    signupContainer:{
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        paddingVertical: 20
    },
    optionText:{
        alignSelf: 'center',
        color: colors.text,
        fontSize: 16,
        paddingVertical: 10
    }
})