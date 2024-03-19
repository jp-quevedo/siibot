import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Return from '../screens/Return'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const BalanceStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Return'
            screenOptions = {({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'Return'
                                        ? 'Declaraciones'
                                        : 'Otros'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'Return' component = { Return } />
        </Stack.Navigator>
    )
}

export default BalanceStack