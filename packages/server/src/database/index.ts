import mongoose from 'mongoose'
require('dotenv').config({
  path: process.env.NODE_ENV === 'dev' ? '.env.development' : '.env.production'
})
mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
