import { InferSchemaType, Schema, model } from "mongoose";
import isEmail from 'validator/lib/isEmail';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        password: {
            type: String,
            required: [true, 'Please enter an password'],
            minlength: [5, 'Minimum password length is 5 characters']
        }
    },
    {
      timestamps: true,
    }
)

type User = InferSchemaType<typeof userSchema>;
export default model<User>("User", userSchema);