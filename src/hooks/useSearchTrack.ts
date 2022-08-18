import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { Track } from '../types/types'
import useDebounce from './useDebounce'

export function useSearchTrack() {
  const [query, setQuery] = useState('')
  const { VITE_PROXY_URL, VITE_API_URL } = import.meta.env

  const debouncedSearchTerm = useDebounce(query, 300)
  const searchTracks = useCallback(async () => {
    return fetch(
      `${VITE_PROXY_URL}/${VITE_API_URL}/search/track/?q=${debouncedSearchTerm}`
    ).then((response) => response.json())
  }, [VITE_API_URL, VITE_PROXY_URL, debouncedSearchTerm])

  const { isLoading, data } = useQuery<{ data: Track[] }>(
    ['search-tracks', debouncedSearchTerm],
    searchTracks
  )

  // console.log({ data })

  return {
    query,
    setQuery,
    isLoading,
    data,
    debouncedSearchTerm,
  }
}
