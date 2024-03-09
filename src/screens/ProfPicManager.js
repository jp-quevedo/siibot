import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    Image,
    StyleSheet,
    View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import { usePutProfPicMutation, useGetProfPicQuery } from '../app/services/profPic'
import EventButton from '../components/EventButton'
import colors from '../utils/globals/colors'

const ProfPicManager = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width

    const [ picture, setPicture] = useState('')
    const [ triggerProfPic ] = usePutProfPicMutation()
    const localId = useSelector((state) => state.auth.localId)
    const { data, isSuccess } = useGetProfPicQuery(localId)

    useEffect(() => {
        if (data && isSuccess) setPicture(data.picture)
    }, [data, isSuccess])

    const selectPicture = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [ 1, 1 ],
                quality: 0.25,
                base64: true
            })
            if (!result.canceled) {
                setPicture('data:picture/jpeg;base64,' + result.assets[0].base64)
            }
        }
    }

    const savePicture = () => {
        triggerProfPic({ picture, localId })
        navigation.goBack()
    }

    return (
        <View style = {[ styles.selectorContainer, { width: windowWidth - 20 } ]}>
            { picture
                ? ( <Image
                    source = {{ uri: picture }}
                    style = { styles.picture }
                    resizeMode = 'cover'
                    /> )
                : ( <Image
                    source = {{ uri: data.picture }}
                    style = { styles.picture }
                    resizeMode = 'cover'
                    /> )
            }
            <EventButton
                onPress={ selectPicture }
                title = 'Seleccionar imagen'
            />
            <EventButton
                onPress={ savePicture }
                title = 'Guardar cambios'
            />
        </View>
    )
}

export default ProfPicManager

const styles = StyleSheet.create({
    selectorContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderColor: colors.container,
        borderRadius: 16,
        gap: 10,
        height: 'auto',
        marginTop: 20,
        paddingVertical: 20
    },
    userIcon: {
        alignSelf: 'center',
        margin: 0,
        padding: 0,
    },
    picture: {
        alignSelf: 'center',
        borderRadius: 100,
        height: 160,
        margin: 0,
        padding: 0,
        width: 160,
    }
})