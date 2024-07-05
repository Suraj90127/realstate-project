import { Schema, model } from "mongoose";

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameslug: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    cityslug: {
      type: String,
      required: true,
    },
    qut: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    apartments: {
      type: String,
      required: true,
    },
    bhk: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    launch: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      // required: true,
    },
    amenitiesimages: {
      type: Array,
      // required: true,
    },
    gallery: {
      type: Array,
      // required: true,
    },
    floorplan: {
      type: Array,
      // required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    highlights: [
      {
        highlightspoint: {
          type: String,
        },
      },
    ],
    locationadvantage: [
      {
        locationadvantagepoint: {
          type: String,
        },
      },
    ],
    questions: [
      {
        que: { type: String },
        ans: { type: String },
      },
    ],

    video: {
      type: Array,
      required: false, // videos are optional
    },
    aboutdevelor: [
      {
        exp: {
          type: String,
          // required: true,
        },
        project: {
          type: String,
          // required: true,
        },
        client: {
          type: String,
          // required: true,
        },
        about: {
          type: String,
          // required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default model("Property", propertySchema);
