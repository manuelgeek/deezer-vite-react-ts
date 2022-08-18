import GridEmptyState from '../components/GridEmptyState'
import LoadingState from '../components/LoadingState'
import TrackCard from '../components/TrackCard'
import { useSearchTrack } from '../hooks/useSearchTrack'

function Home() {
  const { query, setQuery, data, isLoading, debouncedSearchTerm } =
    useSearchTrack()

  return (
    <div className="w-full">
      <header className="flex justify-center bg-gray-200 border-b border-gray-300  py-4">
        <div className="flex space-x-8 w-full md:w-8/12 lg:w-6/12 items-center">
          <div className="flex items-center border-l-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={query}
              type="text"
              placeholder="Type here to search...."
              className="outline-none py-4 px-4 bg-transparent"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-10/12">
          {debouncedSearchTerm ? (
            <h3 className="text-left py-4 px-4">
              Search results for :{' '}
              <span className="font-bold">{query ? `"${query}"` : ''}</span>
            </h3>
          ) : null}
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
                    ? `no results for ${debouncedSearchTerm}`
                    : 'type in the search field to search...'
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
