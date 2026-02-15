import React from "react";

const Card = (props) => {
  return <div className="bg-white border-4 border-red-300 px-5 py-3 w-fit m-5">
    <h1 className="text-4xl">
        {props.user}, {props.age}
    </h1>
  </div>;
};

export default Card;
