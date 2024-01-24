import React, { useState } from 'react'
import { View, SafeAreaView, TextInput, Text, FlatList, ActivityIndicator } from 'react-native'

import { useSearchUsers } from '../../hooks/useGitHubApi'

import { renderItem } from './Home.components'

import styles from './Home.styles'
import Button from '../../components/Button'

export const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const { users, loading, error, searchUsers } = useSearchUsers()

  const handleSearchInputChange = (text: string) => {
    const trimmedText = text.trim()
    setSearchInput(trimmedText)
  }

  const handleSearch = () => {
    if (searchInput !== '') {
      searchUsers(searchInput)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder="Users"
          onChangeText={handleSearchInputChange}
          value={searchInput}
          style={styles.searchInput}
        />
        <Button label="Buscar" onPress={handleSearch} containerStyles={styles.buttonContainer} isLoading={loading} />

        {error && <Text>Error: {error.message}</Text>}

        <FlatList data={users} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
    </SafeAreaView>
  )
}
