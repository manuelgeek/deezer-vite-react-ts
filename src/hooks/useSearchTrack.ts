import { useEffect, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { TrackData } from '../types/types'
import { useAppSelector } from './hooks'
import useDebounce from './useDebounce'

export function useSearchTrack() {
  const search = useAppSelector((state) => state.search.value)
  const [trackData, setTrackData] = useState<TrackData | undefined>(undefined)
  // const [nextUrl, setNextUrl] = useState<string | undefined>('')

  const { VITE_PROXY_URL, VITE_API_URL } = import.meta.env

  const debouncedSearchTerm = useDebounce(search, 300)

  const searchTracks = useCallback(async () => {
    return fetch(
      `${VITE_PROXY_URL}/${VITE_API_URL}/search/track/?q=${debouncedSearchTerm}`
    ).then((response) => response.json())
  }, [VITE_API_URL, VITE_PROXY_URL, debouncedSearchTerm])

  const { isLoading, data } = useQuery<TrackData>(
    ['search-tracks', debouncedSearchTerm],
    searchTracks
  )

  const fetchNextData = async () => {
    const data = await fetch(`${VITE_PROXY_URL}/${trackData?.next}`).then(
      (response) => response.json()
    )
    setTrackData((oldData) => {
      if (oldData)
        return { ...data, ...{ data: [...oldData.data, ...data?.data] } }
      return data
    })
  }

  // console.log({ data })
  // console.log({ trackData })

  useEffect(() => {
    if (!data || 'error' in data) return
    setTrackData(data)
  }, [data])

  return {
    search,
    isLoading,
    data: trackData,
    debouncedSearchTerm,
    fetchNextData,
  }
}
