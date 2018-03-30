import React from "react";

export default function Product(props) {
  let { name, price, image } = props;
  return (
    <figure>
      <ul>
        <img src={image} width="100" height="75" />
        <li>{price}</li>
        <li>{name}</li>
      </ul>
    </figure>
  );
}
