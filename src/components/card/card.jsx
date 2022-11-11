import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl max-h[320px]">
      <div className="card-body">
        <h2 className="card-title text-2xl">{data.name}</h2>
        <p>
          This is a short description of the techno click on explore for more
          informations ...
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
