import type { Movie } from './MovieDetails.model'

export interface MoviesResponse {
  totalAmount: number
  offset: number
  limit: number
  data: Movie[]
}
