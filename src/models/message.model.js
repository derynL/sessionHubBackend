import mongoose from 'mongoose';

const msgSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  chatMsg: { type: String, required: true, minLength: 1, maxLength: 500 },
  userName: { type: String, required: true },
});

const Message = new mongoose.model('Message', msgSchema);

export default Message;
