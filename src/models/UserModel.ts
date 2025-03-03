import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    favorites: {
      type: Array,
      required: true,
    },
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
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
      trim: true,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      nullable: true,
      trim: true,
    },
    location: {
      address: {
        type: String,
        nullable: true,
        trim: true,
      },
      city: {
        type: String,
        nullable: true,
        trim: true,
      },
      postCode: {
        type: String,
        nullable: true,
        trim: true,
      },
      country: {
        type: String,
        nullable: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("User", UserSchema);
