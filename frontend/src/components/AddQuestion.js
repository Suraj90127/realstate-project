import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  fetchProperties,
  clearMessages,
  addQuestionans,
} from "../store/reducer/propertyReducer";
import toast from "react-hot-toast";

const AddQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { properties, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const [cateShow, setCateShow] = useState(false);
  const [property, setProperty] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [allPropertis, setAllPropertis] = useState([]);
  const [id, setId] = useState();

  const [state, setState] = useState({
    category1: "",
    que: "",
    ans: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const propertySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allPropertis.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllPropertis(srcValue);
    } else {
      setAllPropertis(properties);
    }
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

    dispatch(
      addQuestionans({
        id,
        que: state.que,
        ans: state.ans,
      })
    );
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
        que: "",
        ans: "",
        category1: "",
      });
    }
  }, [errorMessage, successMessage, dispatch]);

  useEffect(() => {
    setAllPropertis(properties);
  }, [properties]);
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
            <div className="flex flex-col w-full gap-1 relative">
              <label htmlFor="category1" className="text-white">
                Property
              </label>
              <input
                readOnly
                onClick={() => setCateShow(!cateShow)}
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                value={property}
                type="text"
                placeholder="--select Propertise--"
                id="category1"
              />
              <div
                className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                  cateShow ? "scale-100" : "scale-0"
                }`}
              >
                <div className="w-full px-4 py-2 fixed">
                  <input
                    value={searchValue}
                    onChange={propertySearch}
                    className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden"
                    type="text"
                    placeholder="search"
                  />
                </div>
                <div className="pt-14"></div>
                <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                  {allPropertis.map((c, i) => (
                    <span
                      key={c._id}
                      className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer text-white`}
                      onClick={() => {
                        setCateShow(false);
                        setProperty(c.name);
                        setSearchValue("");
                        setAllPropertis(properties);
                        setId(c._id);
                      }}
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
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
