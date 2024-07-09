import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  fetchProperties,
  addAboutDeveloper,
  clearMessages,
} from "../store/reducer/propertyReducer";

const AddAboutDeveloper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { properties, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  const [cateShow, setCateShow] = useState(false);
  const [property, setProperty] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [allPropertis, setAllPropertis] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const [state, setState] = useState({
    exp: "",
    project: "",
    client: "",
    about: "",
    image: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setState({
      ...state,
      image: e.target.files[0],
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

  const add_AboutDeveloper = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("exp", state.exp);
    formData.append("project", state.project);
    formData.append("client", state.client);
    formData.append("about", state.about);
    formData.append("image", state.image);

    dispatch(addAboutDeveloper(formData));
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
        exp: "",
        project: "",
        client: "",
        about: "",
        image: "",
      });
      setProperty("");
      setId("");
    }
  }, [errorMessage, successMessage, dispatch]);

  useEffect(() => {
    setAllPropertis(properties);
  }, [properties]);

  return (
    <div className="">
      <div className="w-full p-10 bg-gray-800">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-gray-300 text-xl font-semibold">
            Add Developer Data
          </h1>
        </div>
        <form onSubmit={add_AboutDeveloper}>
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
                placeholder="--select Properties--"
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
                  {allPropertis.map((c) => (
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
              <label htmlFor="exp" className="text-gray-300 my-2">
                Add Experiences
              </label>
              <input
                id="exp"
                name="exp"
                type="number"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.exp}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="project" className="text-gray-300 my-2">
                Add Projects
              </label>
              <input
                id="project"
                name="project"
                type="number"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.project}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="client" className="text-gray-300 my-2">
                Add Client
              </label>
              <input
                id="client"
                name="client"
                type="number"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.client}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="about" className="text-gray-300 my-2">
                Description
              </label>
              <input
                id="about"
                name="about"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.about}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="text-gray-300 my-2">
                Upload Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className={`bg-blue-500 w-48 hover:shadow-lg text-white rounded-md px-7 py-2 ${
                loading ? "cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Add Developer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAboutDeveloper;
