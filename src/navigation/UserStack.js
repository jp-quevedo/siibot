import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import ProfileManager from '../screens/ProfileManager'
import AvatarManager from '../screens/AvatarManager'
import LocationManager from '../screens/LocationManager'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'Profile'
            screenOptions = {({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'Profile'
                                        ? 'Perfil'
                                        : route.name === 'Cart'
                                            ? 'Plan'
                                            : route.name === 'ProfileManager'
                                                ? 'Datos Personales'
                                                : route.name === 'AvatarManager'
                                                    ? 'Foto de Perfil'
                                                    : route.name === 'LocationManager'
                                                        ? 'Verificar Dirección'
                                                        : 'Preferencias'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'Profile' component = { Profile } />
            <Stack.Screen name = 'ProfileManager' component = { ProfileManager } />
            <Stack.Screen name = 'AvatarManager' component = { AvatarManager } />
            <Stack.Screen name = 'LocationManager' component = { LocationManager } />
            <Stack.Screen name = 'Cart' component = { Cart } />
        </Stack.Navigator>
    )
}

export default UserStack