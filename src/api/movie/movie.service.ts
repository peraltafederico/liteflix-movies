import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Logger } from '@nestjs/common/services/logger.service'
import { Movie, MovieDocument } from 'src/database/schemas/movie.schema'
import { toNumber } from 'lodash'

@Injectable()
export class MovieService {
  constructor(
    private readonly logger: Logger,
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  async createMovie(body: {
    title: string
    imgUrl: string
    tmdbGenreIds: number[]
  }): Promise<Movie> {
    try {
      let movie = new this.movieModel(body)

      movie = await movie.save()

      this.logger.log(
        `New movie named ${body.title} has been created successfully`
      )

      return movie
    } catch (error) {
      this.logger.error(
        `There was an error creating new movie named ${body.title}`
      )

      throw error
    }
  }

  async getMoviesByGenres(ids: string): Promise<Movie[]> {
    try {
      console.log(ids)

      const genres = ids.split(',').map((id) => toNumber(id))

      const movies = await this.movieModel
        .find({ tmdbGenreIds: { $in: genres } })
        .lean()
        .exec()

      this.logger.log('Movies returned successfully')

      return movies
    } catch (error) {
      this.logger.error(`There was an error returning movies`)

      throw error
    }
  }
}
