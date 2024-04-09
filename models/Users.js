const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: string , required: true , unique: true},
    password: { type: string , required: true },
    email: { type: string , required: true , unique: true},
    phone: { type: string , required: true },
    Name : { type: string , required: true},
    city: { type: string , required: true },
})
const User = mongoose.model('User' , userSchema);
module.export = User;