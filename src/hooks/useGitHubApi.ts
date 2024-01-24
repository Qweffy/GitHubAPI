import { useEffect, useState } from 'react'
import { UserDetails, Repository, Organization, UserSummary } from '../types/githubAPI.types'
import { githubService } from '../services/githubService'

export const useSearchUsers = () => {
  const [users, setUsers] = useState<UserSummary[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const searchUsers = async (query: string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`)
      if (!response.ok) {
        throw new Error('Error al buscar usuarios')
      }
      const userData = await response.json()
      setUsers(userData.items)
    } catch (err: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { users, loading, error, searchUsers }
}

export function useUserDetails(username: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [details, setDetails] = useState<UserDetails | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [orgs, setOrgs] = useState<Organization[]>([])

  useEffect(() => {
    setLoading(true)
    setError(null)

    Promise.all([
      githubService.getUserDetails(username),
      githubService.getUserRepos(username),
      githubService.getUserOrgs(username),
    ])
      .then(([userDetails, userRepos, userOrgs]) => {
        setDetails(userDetails)
        setRepos(userRepos)
        setOrgs(userOrgs)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [username])

  return { loading, error, details, repos, orgs }
}
