import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
})

export const User = mongoose.model('User', UserSchema);
