import { useSelector } from 'react-redux'
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { useGetProfPicQuery } from '../app/services/profPic'
import EventButton from '../components/EventButton'
import IconButton from '../components/IconButton'
import user from '../utils/data/user.json'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Profile = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const localId = useSelector((state) => state.auth.localId)
    const { data } = useGetProfPicQuery(localId)

    return (
        <View style = {[ styles.profileContainer, { width: windowWidth - 20 } ]}>
            { data
                ? ( <Image
                    source = {{ uri: data.picture }}
                    style = { styles.picture }
                    resizeMode = 'cover'
                    /> )
                : ( <MaterialIcons name = 'account-circle' size = { 200 } style = { styles.userIcon } color = { colors.text } /> )
            }
            <IconButton
                    onPress = { () => navigation.navigate('ProfPicManager') }
                    title = 'add-a-photo'
                />
            <View style = { styles.userDataContainer }>
                <Text style = { styles.userName }>{ user.name }</Text>
                <EventButton
                    // onPress={}
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
                    // onPress={}
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