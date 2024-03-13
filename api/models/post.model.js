import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true, 
            unique : true
        },
        image : {
            type : String,
            default : 'https://i.chzbgr.com/full/11290117/hE7051677/' 
        },
        category : {
            type : String,
            default : 'uncategorized'
        },
        slug : {
            type : String,
            required : true,
            unique : true
        }
    }, {timestamps : true}
);

const Post = mongoose.model('Post',postSchema);

export default Post;