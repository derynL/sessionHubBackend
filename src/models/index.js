import mongoose from 'mongoose';

import Member from './member.model';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = Member;

// db.ROLES = ['user', 'admin', 'moderator'];

export default db;
