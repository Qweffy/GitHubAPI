import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Home } from './src/pages/Home/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const App = () => (
  <View style={styles.container}>
    <Home />
  </View>
)

export default App
