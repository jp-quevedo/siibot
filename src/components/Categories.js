import {
    StyleSheet,
    View,
} from 'react-native'

import EventButton from './EventButton'

import Shadow from './wrappers/Shadow'

const Categories = ({
    item,
    screenWidth,
    selectedCategoryState
}) => {
    return (
        <Shadow style={styles.categories}>
            <EventButton
                onPress={() => selectedCategoryState(item)}
                screenWidth={screenWidth}
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