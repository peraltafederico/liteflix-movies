import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MovieDocument = Movie & Document

@Schema()
export class Movie {
  @Prop()
  title: string

  @Prop()
  imgUrl: string

  @Prop()
  tmdbGenreIds: number[]
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
