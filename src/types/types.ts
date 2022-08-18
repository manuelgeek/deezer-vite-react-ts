export interface GridEmptyStateProp {
  message: string
}

export interface Album {
  id: number
  title: string
  cover: number
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: string
}

export interface Artist {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  tracklist: string
  type: string
  nb_fan?: number
}

export interface Track {
  id: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  artist: Artist
  album: Album
  type: string
}

export interface GetTopTrackHookProp {
  artist: Artist
}

export interface DebounceHookProp {
  value: string | null
  delay: number
}

export interface TrackCardProp {
  track: Track
}

export interface TopTrackListItemProps {
  track: Track
  trackNumber: number
}

export interface TopTrackListProps {
  artist: Artist
}
