import mongoose from "mongoose";
const jobSchema =new mongoose.Schema({
    jobtitle: String,
    joblocation: String,
    jobcompany: String,
    photos: [String],
    perks: [String],
    description: String,
    salary:String,
    
});
const Job =mongoose.model('Job', jobSchema);
export default Job;