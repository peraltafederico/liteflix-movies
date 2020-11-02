import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger'
import { Movie } from 'src/database/schemas/movie.schema'
import { CreatMovieRequest } from './dto/create-movie.dto'
import { GroupedByGenreMovie } from './dto/grouped-by-genre-movie.dto'
import { Movie as MovieDto } from './dto/movie.dto'
import { MovieService } from './movie.service'

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('/')
  @ApiCreatedResponse({
    description: 'Movie created successfully',
    type: MovieDto,
  })
  createMovie(@Body() body: CreatMovieRequest): Promise<Movie> {
    return this.movieService.createMovie(body)
  }

  @Get('/')
  @ApiOkResponse({
    description: 'Movies returned successfully',
    type: [MovieDto],
  })
  getMovies(): Promise<Movie[]> {
    return this.movieService.getMovies()
  }

  @Get('/grouped-by-genre')
  @ApiOkResponse({
    description: 'Grouped by genre moves returned successfully',
    type: [GroupedByGenreMovie],
  })
  getMoviesGroupedByGenre(): Promise<GroupedByGenreMovie[]> {
    return this.movieService.getMoviesGroupedByGenre()
  }
}
