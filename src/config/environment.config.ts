import * as dotenv from 'dotenv'

dotenv.config()

interface EnvironmentConfiguration {
  mongoDBUri: string
}

const { MONGO_DB_URI } = process.env

const envConfig = (): EnvironmentConfiguration => ({
  mongoDBUri: MONGO_DB_URI,
})

export default envConfig
