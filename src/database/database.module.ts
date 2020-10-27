import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongoDBUri'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
