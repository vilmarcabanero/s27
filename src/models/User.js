import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		firstName: String,
    lastName: String,
    email: String,
    mobileNo: String
	},
	{ timestamps: true }
)

export default mongoose.model('User', UserSchema)
