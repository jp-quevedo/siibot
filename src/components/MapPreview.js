import {
    Image,
    StyleSheet
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { locationKey } from '../utils/data/database'
import colors from '../utils/globals/colors'

const MapPreview = ({
    latitude,
    longitude
}) => {

    const mapPreviewUrl =
        `https://maps.googleapis.com/maps/api/staticmap?center=${ latitude },${ longitude }
        &zoom=15
        &size=500x500
        &maptype=roadmap
        &markers=color:red%7Clabel:x%7C${ latitude },${ longitude }
        &key=${ locationKey }`

    return (
        <>
            { latitude
                ? ( <Image
                    source = {{ uri: mapPreviewUrl }}
                    style = { styles.mapPreview }
                    /> )
                : ( <MaterialIcons name = 'location-pin' size = { 200 } style = { styles.mapIcon } color = { colors.text } /> )
            }
        </>
    )
}

export default MapPreview

const styles = StyleSheet.create ({
    mapPreview: {
        alignSelf: 'center',
        borderRadius: 8,
        height: 300,
        marginVertical: 20,
        opacity: 0.99,
        position: 'relative',
        width: 300
    },
    mapIcon: {
        alignSelf: 'center',
        margin: 0,
        padding: 0
    }
})