const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true, lowercase: true  },
    department: { type: String, required: false, lowercase: true  },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);