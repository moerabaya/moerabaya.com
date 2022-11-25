import mongoose from "mongoose";
import httpStatus from "http-status";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {string} id - The email of user.
   * @returns {Promise<User, APIError>}
   */
  get(email) {
    return this.findOne({ email })
      .select("name email")
      .exec()
      .then((user: any) => {
        if (user) {
          return user;
        }
        // const err = new APIError(
        //   'User id does not exist',
        //   httpStatus.NOT_FOUND
        // );
        const err = null;
        return Promise.reject(err);
      });
  },
  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limipt - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .select("name email createdAt updatedAt ")
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  },
};

/**
 * @typedef User
 */
export default mongoose.models.User || mongoose.model("User", UserSchema);
