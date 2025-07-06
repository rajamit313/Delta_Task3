import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: String,
  departure: String,
  arrival: String,
  duration: String,
  seats: Object,
  stations: [Object],
  runs_on: [String]
}, { collection: "train" }); //explicitly point to your existing collection name

export default mongoose.models.Train || mongoose.model("Train", trainSchema);
