import {
    StyleSheet
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HistoryStack from './HistoryStack'
import ItemStack from './ItemStack'
import OrderStack from './OrderStack'
import UserStack from './UserStack'
import TabBarIcon from '../components/TabBarIcon'
import colors from '../utils/globals/colors'

const Tab = createBottomTabNavigator()

const TabNavStack = () => {
    return (
        <Tab.Navigator
            initialRouteName = 'ItemStack'
            screenOptions = {{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.menuContainer,
            }}
        >
            <Tab.Screen
                component = { ItemStack }
                name = 'ItemStack'
                options = {{
                    tabBarIcon: ({ focused }) => 
                        <TabBarIcon
                            iconName = 'event-note'
                            title = 'Eventos'
                            focused = { focused }
                    />
                }}
            />
            <Tab.Screen
                component = { OrderStack }
                name = 'OrderStack'
                options = {{
                    tabBarIcon: ({ focused }) => 
                        <TabBarIcon
                            iconName = 'article'
                            title = 'Declaraciones'
                            focused = { focused }
                    />
                }}
            />
            <Tab.Screen
                component = { HistoryStack }
                name = 'HistoryStack'
                options = {{
                    tabBarIcon: ({ focused }) => 
                        <TabBarIcon
                            iconName = 'history'
                            title = 'Historial'
                            focused = { focused }
                    />
                }}
            />
            <Tab.Screen
                component = { UserStack }
                name = 'UserStack'
                options = {{
                    tabBarIcon: ({ focused }) => 
                        <TabBarIcon
                            iconName = 'account-box'
                            title = 'Perfil'
                            focused = { focused }
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavStack

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: colors.container,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-evenly',
        position: 'absolute'
    }
})