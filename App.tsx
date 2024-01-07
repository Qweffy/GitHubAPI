import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './src/components/Button'

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log('hola')} label={'hola'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
