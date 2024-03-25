import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native'
import * as Location from 'expo-location'

import { locationKey } from '../utils/data/database'
import { usePutLocationMutation } from '../app/services/location'
import EventButton from '../components/EventButton'
import MapPreview from '../components/MapPreview'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const LocationManager = ({
    navigation
}) => {

    const windowWidth = Dimensions.get('window').width

    const [ location, setLocation ] = useState({ latitude: '', longitude: '' })
    const [ errorLog, setErrorLog ] = useState(null)
    const [ address, setAddress ] = useState('')

    const localId = useSelector((state) => state.auth.localId)
    const [ triggerLocation ] = usePutLocationMutation()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorLog('Permiso para utilizar localización denegado')
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (location.latitude) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ location.latitude },${ location.longitude }&key=${ locationKey }`)
                const data = await response.json()
                setAddress(data.results[0].formatted_address)
            }
        })()
    }, [location])

    const onSetAddress = async () => {
        const locationFormatted = {
            address,
            location
        }
        await triggerLocation({ localId, locationFormatted })
        navigation.goBack()
    }

    return (
        <View style = {[ styles.profLocContainer, { width: windowWidth - 20 } ]}>
            <Text style = { styles.optionText }>{ address }</Text>
            <MapPreview latitude = { location?.latitude } longitude = { location?.longitude } />
            <EventButton 
                onPress = { onSetAddress }
                title = 'Verificar Dirección'
            />
        </View>
    )
}

export default LocationManager

const styles = StyleSheet.create({
    profLocContainer: {
        alignSelf: 'center',
        backgroundColor: colors.container,
        borderRadius: 16,
        flexDirection: 'column',
        gap: 10,
        marginTop: 20,
        paddingVertical: 20,
    },
    optionText: {
        color: colors.text,
        fontFamily: fonts.regular,
        fontSize: 16,
        margin: 0,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})