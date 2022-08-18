import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Artist } from '../types/types'

export function useGetArtist() {
  const { id } = useParams()
  const { VITE_PROXY_URL, VITE_API_URL } = import.meta.env
  const fetchArtist = useCallback(
    async () =>
      fetch(`${VITE_PROXY_URL}/${VITE_API_URL}/artist/${id}`).then((response) =>
        response.json()
      ),
    [VITE_API_URL, VITE_PROXY_URL, id]
  )

  const { isLoading, data: artist } = useQuery<Artist>(
    ['fetch-artist'],
    fetchArtist
  )

  return {
    isLoading,
    artist,
  }
}
