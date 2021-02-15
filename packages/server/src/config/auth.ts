require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.env.development' : '.env.production'
})
interface AuthProps {
  secret: string | any
}

const authConfig: AuthProps = {
  secret: process.env.JWT_HASH
}

export default authConfig
