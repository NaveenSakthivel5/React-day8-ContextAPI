import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';
import './HuaweiP30.css';

const HuaweiP30 = () => {
  const { myObject4 } = useCartContext();
  const [subtotal, setSubtotal] = React.useState(499); // Initial price value

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const newSubtotal = inputValue * 499;
    setSubtotal(newSubtotal);
  }

  return (
    <div className="amazon-layout">
      <div className="image-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1M6iYZCTP63Cj-xQnbYfCJr65iCZrFUYOQ&usqp=CAU" alt="Huawei P30" />
      </div>

      <div className="details-section">
        <h1>HuaweiP30</h1>
        {Object.entries(myObject4).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}

        <div className="price-info">
          <h3>Price: $499</h3>
          <MDBInput label="Quantity" min={1} max={100} defaultValue={1} type="number" id="quantityInput" onChange={handleInputChange} size="lg"/>
          <h3>Sub-Total: ${subtotal}</h3>
          <div className="shipping-info">
            <h3>SHIPPING: <span>FREE</span></h3>
          </div>
          <button type="button" className="buy-now-btn">Buy Now - ${subtotal}</button>
        </div>
      </div>
    </div>
  );
};

export default HuaweiP30;
