import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    email: String,
    password: String,
});

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10); // Generate salt manually
            this.password = await bcrypt.hash(this.password, salt);
        }
        next();
    } catch (err) {
        next(err); // Handle errors gracefully
    }
});

const User = model('User', userSchema);

export default User;
