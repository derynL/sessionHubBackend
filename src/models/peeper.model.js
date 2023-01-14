import mongoose from 'mongoose';

const peeperSchema = new mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String },
});

const Peeper = new mongoose.model('Peeper', peeperSchema);

export default Peeper;
