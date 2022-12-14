import { GridEmptyStateProp } from '../types/types'

function GridEmptyState({ message }: GridEmptyStateProp) {
  return (
    <div className="h-96 w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="flex items-center justify-center mb-4">
          <img className="h-56" src="/no-search-result.svg" alt="" />
        </span>
        <h1>{message}</h1>
      </div>
    </div>
  )
}
export default GridEmptyState
