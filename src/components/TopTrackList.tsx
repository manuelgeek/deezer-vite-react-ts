import { useGetTopTrack } from '../hooks/useGetTopTrack'
import { TopTrackListProps } from '../types/types'
import LoadingState from './LoadingState'
import TopTrackListItem from './TopTrackListItem'

function TopTrackList({ artist }: TopTrackListProps) {
  const { isLoading, topTracks } = useGetTopTrack({ artist })

  return (
    <div className="w-full">
      <h3 className="font-bold text-2xl">Top Tracks</h3>
      {}
      <ul className="w-full divide-y-2 divide-gray-100 text-left">
        {isLoading ? (
          <LoadingState />
        ) : (
          topTracks?.data.map((track, index) => {
            return (
              <TopTrackListItem
                track={track}
                key={track.id}
                trackNumber={index + 1}
              />
            )
          })
        )}
      </ul>
    </div>
  )
}
export default TopTrackList
