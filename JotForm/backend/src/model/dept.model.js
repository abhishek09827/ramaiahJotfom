import mongoose, {Schema} from "mongoose";
const deptSchema = new Schema({
    dept_name: {
        type: String,

    },
    isAdmin: {
        type: Boolean,

    },
    dept_email: {
        type: String,

    },
    dept_paswd: {
        type: String,
    },
    avatar: {
        type: String, // cloudinary urls
    },

    tables: [
        {
            type: Schema.Types.ObjectId,
            ref: "Table"
        }
    ],
    forms: [
        {
            type: Schema.Types.ObjectId,
            ref: "Form"
        }
    ],


},
{
    timestamps: true
}
)

export const Dept = mongoose.model("Dept", deptSchema)