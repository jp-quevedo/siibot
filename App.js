import {
  StatusBar,
} from 'react-native'
import { useFonts } from 'expo-font'

import Navigator from './src/navigation/Navigator'

import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'

export default function App() {

  const [fontsLoaded] = useFonts(fontCollection)
  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar backgroundColor={colors.container} />
      <Navigator />
    </>
  )
}