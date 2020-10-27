import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MovieModule } from './api/movie/movie.module'
import envConfig from './config/environment.config'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    MovieModule,
  ],
})
export class AppModule {}
