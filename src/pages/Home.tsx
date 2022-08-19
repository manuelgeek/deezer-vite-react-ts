import InfiniteScroll from 'react-infinite-scroll-component'
import GridEmptyState from '../components/GridEmptyState'
import HomeHeader from '../components/HomeHeader'
import LoadingState from '../components/LoadingState'
import TrackCard from '../components/TrackCard'
import { useSearchTrack } from '../hooks/useSearchTrack'

function Home() {
  const { search, data, isLoading, debouncedSearchTerm, fetchNextData } =
    useSearchTrack()

  return (
    <div className="w-full min-h-screen">
      <HomeHeader />
      <div className="flex justify-center">
        <div className="w-full">
          {debouncedSearchTerm && (
            <h3 className="text-left py-4 px-4">
              Search results for :{' '}
              <span className="font-bold">{search ? `"${search}"` : ''}</span>
            </h3>
          )}
          <div className="flex flex-wrap">
            {isLoading ? (
              <LoadingState />
            ) : data && debouncedSearchTerm ? (
              <InfiniteScroll
                dataLength={data?.data?.length}
                next={fetchNextData}
                hasMore={Boolean(data?.next)}
                loader={<LoadingState />}
                endMessage={
                  <div className="flex w-full justify-center text-xl">
                    <b>Yay! You have seen it all</b>
                  </div>
                }
              >
                <div className="flex flex-wrap">
                  {data?.data?.map((track) => (
                    <div key={track.id} className="w-full p-4 md:w-1/5">
                      <TrackCard track={track} />
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            ) : (
              <GridEmptyState
                message={
                  debouncedSearchTerm
                    ? `No results for ${debouncedSearchTerm}. We can't find any item matching your search`
                    : 'Type in the search bar to search your favorite artists...'
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
