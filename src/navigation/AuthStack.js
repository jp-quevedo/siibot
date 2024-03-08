import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'Login'
            screenOptions = {({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'Login'
                                        ? 'Inicio de sesión'
                                        : 'Registro de usuario'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'Login' component = { Login } />
            <Stack.Screen name = 'Signup' component = { Signup } />
        </Stack.Navigator>
    )
}

export default AuthStack