import GridEmptyState from '../components/GridEmptyState'
import HomeHeader from '../components/HomeHeader'
import LoadingState from '../components/LoadingState'
import TrackCard from '../components/TrackCard'
import { useSearchTrack } from '../hooks/useSearchTrack'

function Home() {
  const { search, data, isLoading, debouncedSearchTerm } = useSearchTrack()

  return (
    <div className="w-full">
      <HomeHeader />
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
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
              data?.data?.map((track) => (
                <TrackCard track={track} key={track.id} />
              ))
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
