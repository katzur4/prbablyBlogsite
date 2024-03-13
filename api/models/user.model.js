import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        unique : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    profilePicture:{
        type : String,
        default : 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png'
    },
    isAdmin: {
        type : Boolean,
        default : false
    }

},{timestamps : true});

const User = new mongoose.model('User', userSchema);

export default User;