import React from "react";
import "./Item.css";

const Item = props => (
  <div className="page-section">
    <div className="container">
      <div className="product-item">
        <div className="d-flex product-item-title">
          <div className={`d-flex ${props.position} bg-faded p-5 rounded`}>
            <h2 className="section-heading mb-0">
              <span className="section-heading-lower">
                &nbsp;&nbsp;&nbsp;
                {props.title}
                &nbsp;&nbsp;&nbsp;
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa fa-shopping-cart" />
            </h2>
          </div>
        </div>
        <img
          className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
          src={props.image}
          alt={props.title}
        />
      </div>
    </div>
  </div>
);

export default Item;
