import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ReturnListContainer from '../screens/ReturnListContainer'
import OrderContainer from '../screens/OrderContainer'
import ReturnManager from '../screens/ReturnManager'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const BalanceStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='ReturnListContainer'
            screenOptions = {({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'ReturnListContainer'
                                        ? 'Declaraciones'
                                        : route.name === 'ReturnManager'
                                            ? 'Nueva Declaración'
                                            : 'Detalle'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'ReturnListContainer' component = { ReturnListContainer } />
            <Stack.Screen name = 'OrderContainer' component = { OrderContainer } />
            <Stack.Screen name = 'ReturnManager' component = { ReturnManager } />
        </Stack.Navigator>
    )
}

export default BalanceStack