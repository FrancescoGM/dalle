require('./dotenv')
interface AuthProps {
  JWT_HASH: string | any
  JWT_TIME: number | any
}

const authConfig: AuthProps = {
  JWT_HASH: process.env.JWT_HASH,
  JWT_TIME: process.env.JWT_TIME
}

export default authConfig
