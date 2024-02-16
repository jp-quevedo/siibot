import {
    StyleSheet,
    View
} from 'react-native'

import colors from '../../utils/globals/colors'

const Shadow = ({children, style}) => {
  return (
    <View style={[styles.shadowContainer, style]}>
      {children}
    </View>
  )
}

export default Shadow

const styles = StyleSheet.create({
    shadowContainer:{
        /*
        Android
        elevation: 12,

        IOS
        shadowColor: colors.text,
        shadowOffset: {
            width: -1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        */
    },
})