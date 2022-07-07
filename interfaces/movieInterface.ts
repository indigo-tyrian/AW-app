export interface TMDBProps {
  id: number
  name: string
  poster_path: string
  title: string
  first_air_date: string
  release_date: string
  media_type: string
  vote_average: number
  overview: string
  backdrop_path: string
  runtime: number
  genres: [{
    id: number
    name: string
  }]
}

export interface MovieDataProps {
  id: string
  blogTitle: string
  rate: {
    story: number;
    images: number;
    music: number;
    opening: number;
    endRoll: number;
    innovative: number;
    socialEffect: number;
    businessSuccessful: number;
  }
}