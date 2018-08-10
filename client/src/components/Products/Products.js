import React from "react";
import "./Products.css";
import Item from "../Item";

const items = [
  {
    title: "Roses",
    image: "assets/img/red.jpeg",
    position: "mr-auto"
  },

  {
    title: "Carnations",
    image: "assets/img/orange.jpeg",
    position: "mx-auto"
  },

  {
    title: "Mums",
    image: "assets/img/mums.jpeg",
    position: "ml-auto"
  },

  {
    title: "Succulents",
    image: "assets/img/succulents.jpeg",
    position: "mr-auto"
  },

  {
    title: "Hydrangeas",
    image: "assets/img/hydrangeas.jpeg",
    position: "mx-auto"
  },

  {
    title: "Orchids",
    image: "assets/img/orchid.jpeg",
    position: "ml-auto"
  },

  {
    title: "Lavender",
    image: "assets/img/lavender.jpeg",
    position: "mr-auto"
  }
];

const Products = () => (
  <div>
    <div className="intro-text left-0 text-centerfaded rounded text-center">
      <h2 className="section-heading">
        <span id="instagram" className="section-heading-lower">
          Shop Our Products
        </span>
      </h2>
    </div>

    {items.map(item => (
      <Item title={item.title} image={item.image} position={item.position} />
    ))}
  </div>
);

export default Products;
