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
  tmdbGenreId: number
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
