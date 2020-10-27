import { Logger, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Movie, MovieSchema } from '../../database/schemas/movie.schema'
import { MovieController } from './movie.controller'
import { MovieService } from './movie.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MovieController],
  providers: [MovieService, Logger],
})
export class MovieModule {}
