import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <>
      <div className="breadcrumb py-4 bg-white">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-lg">
                <Link to="/" className="text-gray5">
                  Home &nbsp;
                </Link>
                / {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
