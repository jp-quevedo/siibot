import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrderContainer from '../screens/OrderContainer'
import OrderListContainer from '../screens/OrderListContainer'
import OrderManager from '../screens/OrderManager'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'OrderListContainer'
            screenOptions = {({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'OrderListContainer'
                                        ? 'Declaraciones'
                                        : route.name === 'OrderManager'
                                            ? 'Nueva Declaración'
                                            : 'Detalle'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'OrdernListContainer' component = { OrderListContainer } />
            <Stack.Screen name = 'OrderContainer' component = { OrderContainer } />
            <Stack.Screen name = 'OrderManager' component = { OrderManager } />
        </Stack.Navigator>
    )
}

export default OrderStack