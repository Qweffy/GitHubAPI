import { Organization, Repository, UserDetails, UserSummary } from '../types/githubAPI.types'

const BASE_URL = 'https://api.github.com'

export const githubService = {
  searchUsers: async (query: string): Promise<UserSummary[]> => {
    const url = `${BASE_URL}/search/users?q=${query}`
    console.log('URL de búsqueda de usuarios:', url)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Error fetching users')
      }
      const data = await response.json()
      return data.items as UserSummary[]
    } catch (error) {
      console.error('Error en la búsqueda de usuarios:', error)
      throw error // Re-lanzar el error para que se maneje en el componente que llama a esta función
    }
  },

  getUserDetails: async (username: string): Promise<UserDetails> => {
    const url = `${BASE_URL}/users/${username}`
    console.log('URL de detalles de usuario:', url)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error fetching details for user ${username}`)
      }
      return await (response.json() as Promise<UserDetails>)
    } catch (error) {
      console.error('Error al obtener detalles del usuario:', error)
      throw error // Re-lanzar el error para que se maneje en el componente que llama a esta función
    }
  },

  getUserRepos: async (username: string): Promise<Repository[]> => {
    const url = `${BASE_URL}/users/${username}/repos`
    console.log('URL de repositorios del usuario:', url)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error fetching repos for user ${username}`)
      }
      return await (response.json() as Promise<Repository[]>)
    } catch (error) {
      console.error('Error al obtener repositorios del usuario:', error)
      throw error // Re-lanzar el error para que se maneje en el componente que llama a esta función
    }
  },

  getUserOrgs: async (username: string): Promise<Organization[]> => {
    const url = `${BASE_URL}/users/${username}/orgs`
    console.log('URL de organizaciones del usuario:', url)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error fetching orgs for user ${username}`)
      }
      return await (response.json() as Promise<Organization[]>)
    } catch (error) {
      console.error('Error al obtener organizaciones del usuario:', error)
      throw error // Re-lanzar el error para que se maneje en el componente que llama a esta función
    }
  },
}
