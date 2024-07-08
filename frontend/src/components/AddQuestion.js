import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  createProperty,
  clearMessages,
} from "../store/reducer/propertyReducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const AddQuestion = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const { successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  const [state, setState] = useState({
    name: "",
    que: "",
    ans: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log("ddddddd", e.target.value);
  };

  const add_Question = (e) => {
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
            Add Questions And Answers
          </h1>
        </div>
        <form onSubmit={add_Question}>
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
              <label htmlFor="que" className="text-gray-300 my-2">
                Add Questions
              </label>
              <input
                id="que"
                name="que"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.que}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ans" className="text-gray-300 my-2">
                Add Answer
              </label>
              <input
                id="ans"
                name="ans"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.ans}
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

export default AddQuestion;
