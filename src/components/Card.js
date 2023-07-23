import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <article className="tc bg-light-blue dib br3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
