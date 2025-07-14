import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [5, "Username must be at least 5 characters long"],
    trim: true,
  },
  emailID: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Password must be at least 5 characters long"],
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'vendor', 'admin'],
      message: 'Role must be user, vendor, or admin',
    },
    default: 'user',
  },
  mobile:{
    type: Number,
    length: [10, "Mobile no. must be 10 digits long"],
  },
  profilepic: {
    type: String, default: '/defaultprofilepic.png' 
  },
  coins: { type: Number, default: 1000 },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
