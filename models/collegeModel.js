import mongoose from "mongoose";

// Schema for individual course + fee
const CourseAndFeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String },
  totalFees: { type: String },
  seats: { type: Number },
  level: { type: String },
}, { _id: false });

// Dynamic cutoff schema for multiple courses
const CutoffCourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true }, // e.g., MBBS, MD, BDS, etc.
  cutoffValue: { type: String, required: true } // e.g., "95%", "600 Marks"
}, { _id: false });

// Faculty schema
const FacultySchema = new mongoose.Schema({
  total: { type: Number },
  studentRatio: { type: String },
}, { _id: false });

// Main College schema
const CollegeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  ownership: { type: String, enum: ['Government', 'Private'], required: true },
  established: { type: String },
  state: { type: String },
  city: { type: String },
  category: { type: String },
  courses: [{ type: String }],
  logo: { type: String },
  overview: { type: String },
  coursesAndFees: [CourseAndFeeSchema],
  amenities: [{ type: String }],
  cutoff: [CutoffCourseSchema], // Now you can add any course dynamically
  faculty: FacultySchema,
}, {
  timestamps: true,
  versionKey: false,
});

const College = mongoose.model("College", CollegeSchema);

export default College;
