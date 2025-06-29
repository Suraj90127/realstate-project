import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title, url, title2 } = props;
  return (
    <>
      <div className="breadcrumb py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="">
                <Link to="/" className="">
                  Home &nbsp;
                </Link>
                <Link to={url} className="">
                  {title2} &nbsp;
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
