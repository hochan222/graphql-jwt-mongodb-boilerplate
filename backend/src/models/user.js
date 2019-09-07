import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('user', UserSchema)