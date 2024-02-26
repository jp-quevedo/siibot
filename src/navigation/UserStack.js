import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={({route, navigation}) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation={navigation}
                                title={
                                    route.name === 'Profile'
                                        ? 'Perfil'
                                        : route.name === 'Cart'
                                            ? 'Plan'
                                            : 'Preferencias'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}

export default UserStack