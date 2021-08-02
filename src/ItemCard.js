import React from 'react'
import { useCart } from 'react-use-cart'
import './Image.css'

const ItemCard = (props) => {
  const { addItem } = useCart()
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100  shadow" >
        <img src={props.img} className="card-img-top img-fluid image-align" />
        <div className="card-body  text-center" >
          {
            props.available ? (
              <button className="btn btn-warning mb-2">In Stock</button>

            )
             :
              <button className="btn btn-danger mb-2">Out of Stock</button>
          }
          
          <h5 className="card-title">{props.available ? 'In Stock' : 'Out of Stock'}</h5>
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-title">Rs:{props.price}</h5>
          <h5 className="card-title">{props.available}</h5>
          <h5 className="card-title">{props.vendor}</h5>
          <h5 className="card-title">{props.category}</h5>
          <button className="btn btn-success"
            onClick={() => addItem(props.item)}> Add to Cart</button>
        </div>
      </div>
    </div>
  )

}

export default ItemCard