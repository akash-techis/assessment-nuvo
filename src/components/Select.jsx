import React, { useState, useEffect } from "react";
import ArrowRight from "../img/arrow_right.svg";
import ArrowLeft from "../img/arrow_left.svg";

const Select = ({ product, selected, setSelected }) => {
  const [arrow, setArrow] = useState(true);
  useEffect(() => {
    if (product.id == selected) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  }, [selected]);
  return (
    <div className="select" onClick={() => setSelected(product.id)}>
      <img className="productImg" src={product.image} />
      <br />
      <p>{product.title}</p>
      {arrow ? (
        <img className="arr_img" src={ArrowRight} alt="" />
      ) : (
        <img className="arr_img" src={ArrowLeft} alt="" />
      )}
    </div>
  );
};

export default Select;
