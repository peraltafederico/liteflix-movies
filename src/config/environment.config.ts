import * as dotenv from 'dotenv'

dotenv.config()

interface EnvironmentConfiguration {
  mongoDbUri: string
}

const { MONGO_DB_URI } = process.env

const envConfig = (): EnvironmentConfiguration => ({
  mongoDbUri: MONGO_DB_URI,
})

export default envConfig
