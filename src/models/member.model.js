import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  password: {
    type: String,
    required: true,
  },
});

const Member = new mongoose.model('Member', memberSchema);

export default Member;
