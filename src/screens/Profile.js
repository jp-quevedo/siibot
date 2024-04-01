import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { clearUser } from '../features/auth/authSlice'
import { deleteSession } from '../utils/db'
import { useGetUserQuery } from '../app/services/user'
import EventButton from '../components/EventButton'
import IconButton from '../components/IconButton'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Profile = ({
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width

    const dispatch = useDispatch()
    const localId = useSelector((state) => state.auth.localId)
    const { data: user } = useGetUserQuery(localId)
    const [ userData, setUserData ] = useState('')

    useEffect(() => {
        const fetchUser = () => {
            if (user) {
                setUserData(user)
            }
        }
        fetchUser()
    }, [ user, userData ])

    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <View style = {[ styles.profileContainer, { width: windowWidth - 20 } ]}>
            { userData === ''
                ? ( <MaterialIcons name = 'account-circle' size = { 200 } style = { styles.userIcon } color = { colors.text } /> )
                : ( <Image
                    source = {{ uri: userData.avatar.picture }}
                    style = { styles.picture }
                    resizeMode = 'cover'
                    /> )
            }
            <IconButton
                    onPress = { () => navigation.navigate('AvatarManager') }
                    title = 'add-a-photo'
                />
            <View style = { styles.userDataContainer }>
                { userData === ''
                    ? null
                    : <Text style = { styles.userName }>{ userData.name }</Text>
                }
                <EventButton
                    onPress = { () => navigation.navigate('ProfileManager') }
                    title = 'Datos Personales'
                />
                <EventButton
                    // onPress={}
                    title = 'Preferencias'
                />
                <EventButton
                    onPress = { () => navigation.navigate('Cart') }
                    title = 'Plan'
                />
                <EventButton
                    onPress={ onLogout }
                    title = 'Cerrar Sesión'
                />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
        paddingTop: 0
    },
    picture: {
        alignSelf: 'center',
        borderRadius: 100,
        height: 160,
        marginTop: 20,
        width: 160,
    },
    userIcon: {
        alignSelf: 'center',
        margin: 0,
        padding: 0,
    },
    userDataContainer: {
        alignItems: 'center',
        gap: 20,
    },
    userName: {
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 22,
        margin: 0,
    }
})