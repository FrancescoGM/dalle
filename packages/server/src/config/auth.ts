require('./dotenv')
interface AuthProps {
  secret: string | any
}

const authConfig: AuthProps = {
  secret: process.env.JWT_HASH
}

export default authConfig
