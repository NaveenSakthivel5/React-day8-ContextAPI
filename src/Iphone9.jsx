import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';
import './Iphone9.css';

const Iphone9 = () => {
  const { myObject } = useCartContext();
  const [subtotal, setSubtotal] = React.useState(549); // Initial price value

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const newSubtotal = inputValue * 549;
    setSubtotal(newSubtotal);
  }

  return (
    <div className="amazon-layout">
      <div className="image-section">
        <img src="data:image/jpeg;base64,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" alt="iPhone 9" />
      </div>

      <div className="details-section">
        <h1>iPhone 9</h1>
        {Object.entries(myObject).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}

        <div className="price-info">
          <h3>Price: $549</h3>
          <MDBInput label="Quantity" min={1} max={94} defaultValue={1} type="number" id="quantityInput" onChange={handleInputChange} size="lg"/>
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

export default Iphone9;
