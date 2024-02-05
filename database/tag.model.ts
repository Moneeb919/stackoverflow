import { Schema, models, model, Document } from "mongoose";

interface tagModel extends Document {
    name: string
    description: string
    followers: Schema.Types.ObjectId[]
    questions: Schema.Types.ObjectId[]
    createdOn: Date
}

const tagSchema = new Schema<tagModel>({
    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],

    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Tag = models.Tag || model<tagModel>('Tag', tagSchema);

export default Tag;

