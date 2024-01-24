import React from 'react'
import { View, SafeAreaView, Text, ActivityIndicator, Image } from 'react-native'
import styles from './Detail.styles'
import { useUserDetails } from '../../hooks/useGitHubApi'

export const Detail = ({ route }: any) => {
  const { username } = route.params
  const { loading, error, details, repos, orgs } = useUserDetails(username)

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error al cargar los datos: {error.message}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        {details && (
          <>
            <Image source={{ uri: details.avatar_url }} style={styles.avatar} />
            <Text style={styles.title}>Detalles del Usuario</Text>
            <Text>Nombre: {details.name}</Text>
            <Text>Seguidores: {details.followers}</Text>
            <Text>Siguiendo: {details.following}</Text>
          </>
        )}
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>Repositorios</Text>
        {repos.slice(0, 3).map((repo) => (
          <Text key={repo.id} style={styles.listItem}>
            {repo.name}
          </Text>
        ))}
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>Organizaciones</Text>
        {orgs.slice(0, 3).map((org) => (
          <Text key={org.id} style={styles.listItem}>
            {org.login}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  )
}
