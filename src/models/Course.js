import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema(
	{
		name: String,
    description: String,
    price: Number,
    isActive: Boolean
	},
	{ timestamps: true }
)

export default mongoose.model('Course', CourseSchema)
