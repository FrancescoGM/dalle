import mongoose from 'mongoose'
import '../config/dotenv'
mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
