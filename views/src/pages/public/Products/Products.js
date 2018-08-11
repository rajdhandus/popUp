import React from "react";
import Item from "../../../components/public/Item";

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
    {items.map(item => (
      <Item title={item.title} image={item.image} position={item.position} />
    ))}
  </div>
);

export default Products;

// import React, { Component } from "react";

// class Products extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm">
//             <h1 className="text-center">
//               Products Page
//             </h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Products;