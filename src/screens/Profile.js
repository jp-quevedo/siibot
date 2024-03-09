import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import EventButton from '../components/EventButton'
import user from '../utils/data/user.json'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const Profile = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width

    return (
        <View style = {[ styles.profileContainer, { width: windowWidth - 20 } ]}>
            <MaterialIcons name = 'account-circle' size = { 200 } style = { styles.userIcon } color = { colors.text } />
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
    )
}

export default Profile

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        gap: 20,
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
        paddingTop: 0
    },
    userIcon: {
        alignSelf: 'center'
    },
    userName: {
        color: colors.text,
        fontFamily: fonts.bold,
        fontSize: 22
    }
})