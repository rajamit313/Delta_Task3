import mongoose from "mongoose";

const concertSchema = new mongoose.Schema({
  artist: String,
  city: String,
  venue: String,
  date: String, //YYYY-MM-DD
},{ collection: "concert" });

const Concert = mongoose.models.Concert || mongoose.model("Concert", concertSchema);
export default Concert;
