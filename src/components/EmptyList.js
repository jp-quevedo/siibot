import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import colors from '../utils/globals/colors'

const EmptyList = ({ message }) => {
  return (
    <View style = { styles.container }>
      <Text style = { styles.errorMessage }>{ message }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  errorMessage: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  }
})

export default EmptyList