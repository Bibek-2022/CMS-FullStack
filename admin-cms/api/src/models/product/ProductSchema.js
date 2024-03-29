import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      index: 1,
      maxlength: 20,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    catID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      def: null,
    },
    qty: {
      type: Number,
      required: true,
      default: 0,
    },
    gender: {
      type: String,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    salesPrice: {
      type: String,
    },
    salesStartDate: {
      type: Date,
      default: "null",
    },
    salesEndDate: {
      type: Date,
      default: "null",
    },
    ratings: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
