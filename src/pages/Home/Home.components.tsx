import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

import styles from './Home.styles'
import { RenderItemProps } from './Home.types'

export const renderItem = ({ item, navigation }: RenderItemProps) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Detail', { username: item.login })}
    style={styles.userContainer}>
    <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>Name: {item.login}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.html_url)}>
        <Text style={styles.hyperlink}>Profile: {item.html_url}</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
)
