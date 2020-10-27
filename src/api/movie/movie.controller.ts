import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { Movie } from '../../database/schemas/movie.schema'
import { MovieService } from './movie.service'

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('/')
  createMovie(
    @Body() body: { title: string; imgUrl: string; tmdbGenreIds: number[] }
  ): Promise<Movie> {
    return this.movieService.createMovie(body)
  }

  @Get('/')
  getMoviesByGenres(
    @Query() { genreIds }: { genreIds: string }
  ): Promise<Movie[]> {
    return this.movieService.getMoviesByGenres(genreIds)
  }
}
