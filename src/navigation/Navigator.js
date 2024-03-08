import { useSelector } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import AuthStack from './AuthStack'
import TabNavStack from './TabNavStack'
import colors from '../utils/globals/colors'

const MyTheme = {
    ...DefaultTheme,
    colors:{
        background: colors.background,
    },
}

const Navigator = () => {

    const user = useSelector((state) => state.auth)
    
    return (
        <NavigationContainer theme = { MyTheme }>
            { user.idToken
                ? <TabNavStack />
                : <AuthStack />
            }
        </NavigationContainer>
    )
}

export default Navigator