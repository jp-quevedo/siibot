import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import ItemContainer from '../screens/ItemContainer'
import ItemListContainer from '../screens/ItemListContainer'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const ItemStack = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'Home'
            screenOptions={({ route, navigation }) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation = { navigation }
                                title = {
                                    route.name === 'Home'
                                        ? 'Categorías'
                                        : route.name === 'ItemListContainer'
                                            ? route.params.categorySelected
                                            : 'Detalle'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name = 'Home' component = { Home } />
            <Stack.Screen name = 'ItemContainer' component = { ItemContainer } />
            <Stack.Screen name = 'ItemListContainer' component = { ItemListContainer } />
        </Stack.Navigator>
    )
}

export default ItemStack