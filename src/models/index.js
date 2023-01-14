import mongoose from 'mongoose';

import Peeper from './peeper.model';

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = Peeper;

// db.ROLES = ['user', 'admin', 'moderator'];

export default db;
