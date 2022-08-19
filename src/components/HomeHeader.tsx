import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addSearchTerm, clearSearch } from '../store/searchSlice'

function HomeHeader() {
  const search = useAppSelector((state) => state.search.value)
  const dispatch = useAppDispatch()

  return (
    <header className="flex justify-center bg-gray-200 border-b border-gray-300 py-2 md:py-3">
      <div className="w-full items-center px-4 md:px-12">
        <div className="flex items-center justify-between border-l-2 px-4">
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
            id="search"
            data-testid="search"
            value={search}
            type="text"
            placeholder="Type here to search ...."
            className="outline-none py-4 px-4 bg-transparent w-3/4"
            onChange={(e) => dispatch(addSearchTerm(e.target.value))}
          />
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => dispatch(clearSearch())}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Clear text</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
