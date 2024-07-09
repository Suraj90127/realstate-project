// import { Schema, model } from "mongoose";

// const propertySchema = new Schema(
//   {
//     name: {
//       type: String,
//       // required: true,
//     },
//     nameslug: {
//       type: String,
//       // required: true,
//     },
//     city: {
//       type: String,
//       // required: true,
//     },
//     cityslug: {
//       type: String,
//       // required: true,
//     },
//     qut: {
//       type: Number,
//       // required: true,
//     },
//     location: {
//       type: String,
//       // required: true,
//     },
//     apartments: {
//       type: String,
//       // required: true,
//     },
//     bhk: {
//       type: String,
//       // required: true,
//     },
//     area: {
//       type: String,
//       // required: true,
//     },
//     price: {
//       type: Number,
//       // required: true,
//     },
//     date: {
//       type: String,
//       // required: true,
//     },
//     launch: {
//       type: String,
//       // required: true,
//     },
//     images: {
//       type: Array,
//       // required: true,
//     },
//     amenitiesimages: {
//       type: Array,
//       // required: true,
//     },
//     gallery: {
//       type: Array,
//       // required: true,
//     },
//     floorplan: {
//       type: Array,
//       // required: true,
//     },
//     discription: {
//       type: String,
//       // required: true,
//     },
//     highlights: [
//       {
//         highlightspoint: {
//           type: String,
//         },
//       },
//     ],
//     locationadvantage: [
//       {
//         locationadvantagepoint: {
//           type: String,
//         },
//       },
//     ],
//     questions: [
//       {
//         que: { type: String },
//         ans: { type: String },
//       },
//     ],
//     videos: {
//       type: Array,
//       required: false, // videos are optional
//     },
//     aboutdevelor: [
//       {
//         exp: {
//           type: Number,
//           // required: true,
//         },
//         project: {
//           type: Number,
//           // required: true,
//         },
//         client: {
//           type: Number,
//           // required: true,
//         },
//         about: {
//           type: Number,
//           // required: true,
//         },
//         image: {
//           type: String, // URL of the image
//           // required: true,
//         },
//       },
//     ],
//     service: {
//       type: String,
//       // Add any additional validation or default values if needed
//     },
//     resourcetype: {
//       type: String,
//       // Add any additional validation or default values if needed
//     },
//   },
//   { timestamps: true }
// );

// export default model("Property", propertySchema);

import { Schema, model } from "mongoose";

const AboutDeveloperSchema = new Schema({
  exp: {
    type: Number,
    // required: true,
  },
  project: {
    type: Number,
    // required: true,
  },
  client: {
    type: Number,
    // required: true,
  },
  about: {
    type: String,
    // required: true,
  },
  image: {
    type: String, // URL of the image
    // required: true,
  },
});

const propertySchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    nameslug: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    cityslug: {
      type: String,
      // required: true,
    },
    qut: {
      type: Number,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    apartments: {
      type: String,
      // required: true,
    },
    bhk: {
      type: String,
      // required: true,
    },
    area: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    date: {
      type: String,
      // required: true,
    },
    launch: {
      type: String,
      // required: true,
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
      // required: true,
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
    videos: {
      type: Array,
      required: false, // videos are optional
    },
    aboutdevelor: [AboutDeveloperSchema],
    service: {
      type: String,
      // Add any additional validation or default values if needed
    },
    resourcetype: {
      type: String,
      // Add any additional validation or default values if needed
    },
  },
  { timestamps: true }
);

export default model("Property", propertySchema);
