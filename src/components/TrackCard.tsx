import { Link } from 'react-router-dom'
import { TrackCardProp } from '../types/types'

function TrackCard({ track }: TrackCardProp) {
  return (
    <div className="w-full p-4 md:w-1/4">
      <Link to={`/artist/${track?.artist?.id}`}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={track?.album?.cover_medium}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {track?.title}
            </h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              <Link to={`/artist/${track?.artist?.id}`}>
                {track?.artist?.name}
              </Link>
            </h2>
            <p className="leading-relaxed mb-3">{track?.album?.title}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TrackCard
