import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Logger } from '@nestjs/common/services/logger.service'
import { Movie, MovieDocument } from '../../database/schemas/movie.schema'
import { GroupedByGenreMovie } from './dto/grouped-by-genre-movie.dto'

@Injectable()
export class MovieService {
  constructor(
    private readonly logger: Logger,
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}

  async createMovie(body: {
    title: string
    imgUrl: string
    tmdbGenreId: number
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

  async getMovies(): Promise<Movie[]> {
    try {
      const movies = await this.movieModel.find().lean().exec()

      this.logger.log('Movies returned successfully')

      return movies
    } catch (error) {
      this.logger.error(`There was an error returning movies`)

      throw error
    }
  }

  async getGroupedByGenreMovies(): Promise<GroupedByGenreMovie[]> {
    try {
      const res = await this.movieModel
        .aggregate([
          {
            $sort: { _id: -1 },
          },
          {
            $group: {
              _id: '$tmdbGenreId',
              movies: {
                $push: '$$ROOT',
              },
              tmdbGenreId: {
                $first: '$tmdbGenreId',
              },
            },
          },
          {
            $project: {
              _id: 0,
            },
          },
        ])
        .exec()

      this.logger.log('Grouped by genre movies returned successfully')

      return res
    } catch (error) {
      this.logger.error('There was an error getting grouped by genre movies')

      throw error
    }
  }
}
