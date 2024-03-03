import {createNativeStackNavigator} from '@react-navigation/native-stack'

import History from '../screens/History'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const HistoryStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='History'
            screenOptions={({route, navigation}) => {
                return {
                    header: () => {
                        return (
                            <Header
                                navigation={navigation}
                                title={
                                    route.name === 'History'
                                        ? 'Historial'
                                        : 'Otros'
                                }
                            />
                        )
                    }
                }
            }}
        >
            <Stack.Screen name='History' component={History} />
        </Stack.Navigator>
    )
}

export default HistoryStack