import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator'
import { Movie } from './movie.dto'

export class GroupedByGenreMovie {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly tmdbGenreId: number

  @ApiProperty({ isArray: true, type: Movie })
  @IsArray()
  @IsNotEmpty()
  readonly movies: Movie[]
}
