import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Balance from '../screens/Balance'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const BalanceStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Balance'
            screenOptions={({route, navigation}) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation={navigation}
                                title={
                                    route.name === 'Balance'
                                        ? 'Balance'
                                        : 'Otros'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name='Balance' component={Balance} />
        </Stack.Navigator>
    )
}

export default BalanceStack