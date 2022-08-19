import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { Track } from '../types/types'
import { useAppSelector } from './hooks'
import useDebounce from './useDebounce'

export function useSearchTrack() {
  const search = useAppSelector((state) => state.search.value)

  const { VITE_PROXY_URL, VITE_API_URL } = import.meta.env

  const debouncedSearchTerm = useDebounce(search, 300)
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
    search,
    isLoading,
    data,
    debouncedSearchTerm,
  }
}
