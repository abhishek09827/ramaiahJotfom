import mongoose, {Schema} from "mongoose";
const tableSchema = new Schema({
    table_name: {
        type: String,

    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "Dept"

    },

    rowContent:
        {
            type: Schema.Types.Mixed
        }
    ,
    colDef:
        {
            type: Schema.Types.Mixed
        }


},
{
    timestamps: true
}
)

export const Table = mongoose.model("Table", tableSchema)