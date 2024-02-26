import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const Settings = () => {
    return (
        <View style={styles.settingsContainer}>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    settingsContainer:{
        alignItems: 'center',
    },
})