import React from "react";
import { Advert } from "../../component/mid/Advert";
import { Category } from "../../component/mid/Category";
import Category2 from "../../component/mid/Category2";

export const MidSection = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <Advert />
        <hr />
        <Category2 />
        <Category />
      </div>
    </div>
  );
};
