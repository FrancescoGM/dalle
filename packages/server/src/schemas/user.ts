import mongoose, { Document, Model, Schema } from 'mongoose'
import authConfig from '../config/auth'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

type User = Document & {
  username: string
  password: string
  email: string
  dateOfBirth: Date
}

interface UserDocument extends User {
  compareHash(password: string): Promise<boolean>
}

interface UserModel extends Model<UserDocument> {
  generateJWT(id: string): string
}

const UserSchema: mongoose.Schema<User, any> = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      notEmpty: true,
      check: {
        min: 4,
        max: 50
      }
    },
    password: {
      type: String,
      required: true,
      check: {
        min: 6,
        max: 20
      }
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.set('password', await bcrypt.hash(this.get('password'), 10))
})

UserSchema.methods.compareHash = function (password: string) {
  return bcrypt.compare(password, this.password)
}

UserSchema.statics.generateJWT = (id: string) => {
  return jwt.sign({ id }, authConfig.JWT_HASH, {
    expiresIn: authConfig.JWT_TIME || 86400
  })
}

export default mongoose.model<UserDocument, UserModel>('User', UserSchema)
