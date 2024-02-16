import {
    StyleSheet,
} from 'react-native'

import EventButton from './EventButton'
import Shadow from './wrappers/Shadow'

const Categories = ({
    item,
    selectedCategoryState,
    windowWidth
}) => {
    return (
        <Shadow style={styles.categories}>
            <EventButton
                onPress={() => selectedCategoryState(item)}
                windowWidth={windowWidth}
                title={item}
            />
        </Shadow>
    )
}

export default Categories

const styles = StyleSheet.create({
    categories:{
        marginBottom: 20,
    },
})