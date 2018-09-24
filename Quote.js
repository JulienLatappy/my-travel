import React from "react";

const Quote = ({ destination, country, image, distance}) => (
  <figure>
    <img src={image} alt="Sanfrancisco" />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite>
      <blockquote>{distance}</blockquote>
    </figcaption>
  </figure>
);

export default Quote;