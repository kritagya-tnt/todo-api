//create todo schema and models

import mongoose from "mongoose";

interface todoList {
    title : string,
    done? : boolean,
    inprogress? : boolean,
    notdone? : boolean
}

const todoSchema = new mongoose.Schema({
    title : String,
    done : {
        type : Boolean,
        default : false
    },
    inprogress : {
        type : Boolean,
        default : true,
    }
});

export default mongoose.model<todoList>("todo",todoSchema);