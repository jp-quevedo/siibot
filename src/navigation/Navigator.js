import {
    Dimensions,
    StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BalanceStack from './BalanceStack'
import ItemStack from './ItemStack'
import UserStack from './UserStack'

import TabBarIcon from '../components/TabBarIcon'

import colors from '../utils/globals/colors'

const Tab = createBottomTabNavigator()

const Navigator = () => {

    const windowWidth = Dimensions.get('window').width

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ItemStack'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.menuContainer,
                }}
            >
                <Tab.Screen
                    component={ItemStack}
                    name='ItemStack'
                    options={{
                        tabBarIcon: ({focused}) => 
                            <TabBarIcon
                                iconName='home'
                                title='Inicio'
                                focused={focused}
                        />
                    }}
                />
                <Tab.Screen
                    component={BalanceStack}
                    name='BalanceStack'
                    options={{
                        tabBarIcon: ({focused}) => 
                            <TabBarIcon
                                iconName='account-balance-wallet'
                                title='Balance'
                                focused={focused}
                        />
                    }}
                />
                <Tab.Screen
                    component={UserStack}
                    name='UserStack'
                    options={{
                        tabBarIcon: ({focused}) => 
                            <TabBarIcon
                                iconName='account-box'
                                title='Perfil'
                                focused={focused}
                        />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
    menuContainer:{
        backgroundColor: colors.container,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
        position: 'absolute',
    },
})