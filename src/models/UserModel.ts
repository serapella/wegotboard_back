import mongoose, { Schema } from "mongoose";
import { Product } from "./ProductModel";

const UserSchema = new mongoose.Schema(
  {
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: Product,
        trim: true,
      },
    ],
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
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
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
    verificationToken: { type: String },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
