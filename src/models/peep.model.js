import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  peepMsg: { type: String, required: true, minLength: 1, maxLength: 500 },
  userName: { type: String, required: true },
});

const Peep = new mongoose.model('Peep', peepSchema);

export default Peep;
