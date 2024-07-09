import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import {
  createProperty,
  clearMessages,
} from "../store/reducer/propertyReducer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const { successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  const [state, setState] = useState({
    name: "",
    city: "",
    qut: "",
    location: "",
    apartments: "",
    bhk: "",
    area: "",
    price: "",
    date: "",
    launch: "",
    description: "",
    service: "",
    resourcetype: "",
  });

  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const [amenitiesImages, setAmenitiesImages] = useState([]);
  const [amenitiesImageShow, setAmenitiesImageShow] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryImageShow, setGalleryImageShow] = useState([]);
  const [floorplanImages, setFloorplanImages] = useState([]);
  const [floorplanImageShow, setFloorplanImageShow] = useState([]);
  const [video, setVideo] = useState(null);
  const [videoShow, setVideoShow] = useState(null);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandle = (e, setImageState, setImageShowState) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImageState((prev) => [...prev, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShowState((prev) => [...prev, ...imageUrl]);
    }
  };

  const removeImage = (index, images, setImages, imageShow, setImageShow) => {
    setImages(images.filter((_, i) => i !== index));
    setImageShow(imageShow.filter((_, i) => i !== index));
  };

  const videoHandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
      setVideoShow({ url: URL.createObjectURL(file) });
    }
  };

  const removeVideo = () => {
    setVideo(null);
    setVideoShow(null);
  };

  const addProperty = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });
    images.forEach((image) => {
      formData.append("images", image);
    });
    amenitiesImages.forEach((image) => {
      formData.append("amenitiesimages", image);
    });
    galleryImages.forEach((image) => {
      formData.append("gallery", image);
    });
    floorplanImages.forEach((image) => {
      formData.append("floorplan", image);
    });
    if (video) {
      formData.append("video", video);
    }

    // Log the formData contents
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    dispatch(createProperty(formData));
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
        qut: "",
        location: "",
        apartments: "",
        bhk: "",
        area: "",
        price: "",
        date: "",
        launch: "",
        discription: "",
        service: "",
        resourcetype: "",
      });
      setImageShow([]);
      setImages([]);
      setAmenitiesImageShow([]);
      setAmenitiesImages([]);
      setGalleryImageShow([]);
      setGalleryImages([]);
      setFloorplanImageShow([]);
      setFloorplanImages([]);
      setVideoShow(null);
      setVideo(null);
      naviget("/");
    }
  }, [errorMessage, successMessage, dispatch]);

  return (
    <div className="">
      {/* <Toaster /> */}
      <div className="w-full p-10 bg-gray-800">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-gray-300 text-xl font-semibold">Add Property</h1>
        </div>
        <form onSubmit={addProperty}>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
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
              <label htmlFor="city" className="text-gray-300 my-2">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.city}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Quantity
              </label>
              <input
                id="qut"
                name="qut"
                type="number"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.qut}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.location}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Apartments Type
              </label>
              <input
                id="apartments"
                name="apartments"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.apartments}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                BHK Type
              </label>
              <input
                id="bhk"
                name="bhk"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.bhk}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Area
              </label>
              <input
                id="area"
                name="area"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.area}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.price}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.date}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Launch Time
              </label>
              <input
                id="launch"
                name="launch"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.launch}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="text-gray-300 my-2">
                Service
              </label>
              <input
                id="service"
                name="service"
                type="text"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.service}
                onChange={inputHandle}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="resourcetype" className="text-gray-300 my-2">
                Resourcetype Type
              </label>
              <select
                id="resourcetype"
                name="resourcetype"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
                value={state.resourcetype}
                onChange={inputHandle}
              >
                <option value="">Select Resourcetype</option>
                <option value="MOST POPULAR PLACES PROPERTIS">
                  MOST POPULAR PLACES PROPERTIS
                </option>
                <option value="FEATURED PROJECTS PROPERTIS">
                  FEATURED PROJECTS PROPERTIS
                </option>
                <option value="OUR SERVICES PROPERTIS">
                  OUR SERVICES PROPERTIS
                </option>
              </select>
            </div>
          </div>
          {/* Add more input fields similarly */}
          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="discription">Description</label>
            <textarea
              id="discription"
              name="discription"
              rows={4}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none"
              value={state.discription}
              onChange={inputHandle}
            ></textarea>
          </div>

          {/* Property Images */}
          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="images">Property Images</label>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
              {imageShow.map((img, i) => (
                <div key={i} className="relative h-36">
                  <img
                    className="w-full h-full rounded-sm"
                    src={img.url}
                    alt=""
                  />
                  <span
                    onClick={() =>
                      removeImage(i, images, setImages, imageShow, setImageShow)
                    }
                    className="absolute top-1 right-1 p-2 bg-gray-600 text-white rounded-full cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center h-36 cursor-pointer border border-dashed border-gray-600 text-gray-300 hover:border-indigo-500"
                htmlFor="images"
              >
                <BsImages className="text-2xl" />
                <span>Select Images</span>
              </label>
              <input
                id="images"
                name="images"
                type="file"
                multiple
                className="hidden"
                onChange={(e) => imageHandle(e, setImages, setImageShow)}
              />
            </div>
          </div>

          {/* Amenities Images */}
          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="amenitiesImages">Amenities Images</label>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
              {amenitiesImageShow.map((img, i) => (
                <div key={i} className="relative h-36">
                  <img
                    className="w-full h-full rounded-sm"
                    src={img.url}
                    alt=""
                  />
                  <span
                    onClick={() =>
                      removeImage(
                        i,
                        amenitiesImages,
                        setAmenitiesImages,
                        amenitiesImageShow,
                        setAmenitiesImageShow
                      )
                    }
                    className="absolute top-1 right-1 p-2 bg-gray-600 text-white rounded-full cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center h-36 cursor-pointer border border-dashed border-gray-600 text-gray-300 hover:border-indigo-500"
                htmlFor="amenitiesImages"
              >
                <BsImages className="text-2xl" />
                <span>Select Images</span>
              </label>
              <input
                id="amenitiesImages"
                name="amenitiesImages"
                type="file"
                multiple
                className="hidden"
                onChange={(e) =>
                  imageHandle(e, setAmenitiesImages, setAmenitiesImageShow)
                }
              />
            </div>
          </div>

          {/* Gallery Images */}
          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="galleryImages">Gallery Images</label>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
              {galleryImageShow.map((img, i) => (
                <div key={i} className="relative h-36">
                  <img
                    className="w-full h-full rounded-sm"
                    src={img.url}
                    alt=""
                  />
                  <span
                    onClick={() =>
                      removeImage(
                        i,
                        galleryImages,
                        setGalleryImages,
                        galleryImageShow,
                        setGalleryImageShow
                      )
                    }
                    className="absolute top-1 right-1 p-2 bg-gray-600 text-white rounded-full cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center h-36 cursor-pointer border border-dashed border-gray-600 text-gray-300 hover:border-indigo-500"
                htmlFor="galleryImages"
              >
                <BsImages className="text-2xl" />
                <span>Select Images</span>
              </label>
              <input
                id="galleryImages"
                name="galleryImages"
                type="file"
                multiple
                className="hidden"
                onChange={(e) =>
                  imageHandle(e, setGalleryImages, setGalleryImageShow)
                }
              />
            </div>
          </div>

          {/* Floorplan Images */}
          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="floorplanImages">Floorplan Images</label>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-4">
              {floorplanImageShow.map((img, i) => (
                <div key={i} className="relative h-36">
                  <img
                    className="w-full h-full rounded-sm"
                    src={img.url}
                    alt=""
                  />
                  <span
                    onClick={() =>
                      removeImage(
                        i,
                        floorplanImages,
                        setFloorplanImages,
                        floorplanImageShow,
                        setFloorplanImageShow
                      )
                    }
                    className="absolute top-1 right-1 p-2 bg-gray-600 text-white rounded-full cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center h-36 cursor-pointer border border-dashed border-gray-600 text-gray-300 hover:border-indigo-500"
                htmlFor="floorplanImages"
              >
                <BsImages className="text-2xl" />
                <span>Select Images</span>
              </label>
              <input
                id="floorplanImages"
                name="floorplanImages"
                type="file"
                multiple
                className="hidden"
                onChange={(e) =>
                  imageHandle(e, setFloorplanImages, setFloorplanImageShow)
                }
              />
            </div>
          </div>

          <div className="flex flex-col mb-3 w-full text-gray-300">
            <label htmlFor="video">Product Video</label>
            <div className="flex flex-wrap gap-2 border border-gray-600 p-4 rounded-md">
              {videoShow ? (
                <div className="relative w-24 h-24">
                  <video
                    className="w-full h-full object-cover"
                    src={videoShow.url}
                    controls
                  />
                  <span
                    onClick={removeVideo}
                    className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 flex justify-center items-center cursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                  <input
                    id="videos"
                    name="videos"
                    type="file"
                    className="hidden"
                    onChange={(e) => videoHandle(e)}
                  />
                  <label
                    htmlFor="video"
                    className="absolute top-0 left-0 bg-indigo-500 text-white w-5 h-5 flex justify-center items-center cursor-pointer"
                  >
                    <MdOutlineVideoLibrary />
                  </label>
                </div>
              ) : (
                <div>
                  <input
                    id="video"
                    name="video"
                    type="file"
                    className="hidden"
                    accept="video/*"
                    onChange={videoHandle}
                  />
                  <label
                    htmlFor="video"
                    className="flex justify-center items-center w-24 h-24 border border-gray-600 cursor-pointer"
                  >
                    <MdOutlineVideoLibrary className="text-2xl" />
                  </label>
                </div>
              )}
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

export default Dashboard;
