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

        /*Android*/
        elevation: 10,

        /*IOS*/
        shadowColor: colors.text,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

    },

})