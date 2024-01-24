import { useEffect, useState } from 'react'
import { UserSummary, UserDetails, Repository, Organization } from '../types/githubAPI.types'
import { githubService } from '../services/githubService'

export function useSearchUsers(query: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [users, setUsers] = useState<UserSummary[]>([])

  useEffect(() => {
    setLoading(true)
    setError(null)

    githubService
      .searchUsers(query)
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [query])

  return { loading, error, users }
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
