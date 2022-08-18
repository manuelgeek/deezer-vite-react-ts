import { useCallback } from 'react'
import { useQuery } from 'react-query'
import { GetTopTrackHookProp, Track } from '../types/types'

export function useGetTopTrack({ artist }: GetTopTrackHookProp) {
  const { VITE_PROXY_URL, VITE_API_URL } = import.meta.env

  const fetchTopTracks = useCallback(
    () =>
      fetch(
        `${VITE_PROXY_URL}/${VITE_API_URL}/artist/${artist.id}/top?limit=5`
      ).then((response) => response.json()),
    [VITE_API_URL, VITE_PROXY_URL, artist.id]
  )

  const {
    isLoading,
    isError,
    data: topTracks,
    error,
  } = useQuery<{ data: Track[] }>(['fetch-top-tracks'], fetchTopTracks)

  return {
    isLoading,
    isError,
    error,
    topTracks,
  }
}
