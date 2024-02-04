import { Schema, models, model, Document } from "mongoose";

interface userModel extends Document {
    clerkId: string
    name: string
    username: string
    email: string
    password?: string
    bio?: string
    picture: string
    location?: string
    githubLink?: string
    joinedAt: Date
    questions: Schema.Types.ObjectId[]
    answers: Schema.Types.ObjectId[]
    // upvotes: Schema.Types.ObjectId[]
    // downvotes: Schema.Types.ObjectId[]
    reputation?: number
    saved: Schema.Types.ObjectId[]
}

const userSchema = new Schema<userModel>({
    clerkId: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
    },

    bio: {
        type: String
    },

    picture: {
        type: String,
        required: true
    },

    joinedAt: {
        type: Date,
        default: Date.now
    },

    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],

    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],

    // upvotes: {
    //     type: [Schema.Types.ObjectId],
    //     ref: 'Question'
    // },

    // downvotes: {
    //     type: [Schema.Types.ObjectId],
    //     ref: 'Question'
    // },

    reputation: {
        type: Number,
        default: 0
    },

    saved: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

const User = models.User || model<userModel>('User', userSchema);

export default User;

