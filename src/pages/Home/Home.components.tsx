import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

import styles from './Home.styles'
import { UserSummary } from '../../types/githubAPI.types'

export const renderItem = ({ item }: { item: UserSummary }) => (
  <View style={styles.userContainer}>
    <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>Name: {item.login}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.html_url)}>
        <Text style={styles.hyperlink}>Profile: {item.html_url}</Text>
      </TouchableOpacity>
    </View>
  </View>
)
