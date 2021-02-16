import Server from './server'
import './config/dotenv'

const PORT = process.env.SERVER_PORT || 3000

Server.listen(PORT, () => {
  console.log(`Running at port ${PORT}`)
})
