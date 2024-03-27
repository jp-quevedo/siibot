import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { fetchSession } from '../utils/db'
import { setUser } from '../features/auth/authSlice'
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

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)

    useEffect(() => {
        (async () => {
            const session = await fetchSession()
            if (session.rows.length) {
                const user = session.rows._array[0]
                dispatch(setUser(user))
            }
        })()
    }, [])
    
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