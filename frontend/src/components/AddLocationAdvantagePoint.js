import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddLocationAdvantagePoint = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const { property, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );
  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  console.log("ddddddd", property);

  const [state, setState] = useState({
    name: "",
    locationadvantagepoint: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const add_LocationAdvantagePoint = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });

    // Log the formData contents
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    // dispatch(createProperty(formData));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessages());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessages());
      setState({
        name: "",
        city: "",
      });
    }
  }, [errorMessage, successMessage, dispatch]);
  return (
    <div className="">
      {/* <Toaster /> */}
      <div className="w-full p-10 bg-gray-800">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-gray-300 text-xl font-semibold">
            Add LocationAdvantagePoint
          </h1>
        </div>
        <form onSubmit={add_LocationAdvantagePoint}>
          <div className="grid md:grid-cols-1 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-300 my-2">
                Property Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.name}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="highlightspoint" className="text-gray-300 my-2">
                Add Location Advantage Points
              </label>
              <input
                id="locationadvantagepoint"
                name="locationadvantagepoint"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.locationadvantagepoint}
                onChange={inputHandle}
              />
            </div>
          </div>
          {/* Add more input fields similarly */}

          <div className="flex">
            <button
              type="submit"
              className={`bg-blue-500 w-48 hover:shadow-lg text-white rounded-md px-7 py-2 ${
                loading ? "cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Add Property"}
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="flex justify-between mt-4">
            <button className="bg-green-500 hover:shadow-lg text-white rounded-sm px-7 py-2">
              Add Highlights
            </button>
            <button className="bg-yellow-500 hover:shadow-lg text-white rounded-sm px-7 py-2">
              Add Location Advantage
            </button>
            <button className="bg-purple-500 hover:shadow-lg text-white rounded-sm px-7 py-2">
              Add Questions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddLocationAdvantagePoint;
