import React from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import { useCartContext } from './CartContext';
import './IphoneX.css';

const IphoneX = () => {
  const { myObject1 } = useCartContext();
  const [subtotal, setSubtotal] = React.useState(899); // Initial price value

  function handleInputChange(event) {
    const inputValue = event.target.value;
    const newSubtotal = inputValue * 899;
    setSubtotal(newSubtotal);
  }

  return (
    <div className="amazon-layout">
      <div className="image-section">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8QEA8PDg8PDQ8PEA0PEBAPDw0PFRIWFhYRExUYHSggGBolGxMVLT0hJSkrOi4uFx81ODMvNygwLisBCgoKDg0OGxAQGy0fHR4rLS0tMDcrLS0tLS4tLS0tLi8rLSsvLS0tLS8tLS0rKy0tLS0tLS0tNy0rLS0tLS0rN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYCCAH/xABHEAACAQICBAgJCgMIAwAAAAAAAQIDBAURBxIhMQZBUXF0dbK0ExQiMmGBkaGzIyQzNDVCcqKxwSVSc0NjZGWCksTRFURi/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAEDBAIFBgf/xAApEQEAAgIBAwQBAwUAAAAAAAAAAQIDEQQSITEFE0FxMlFSgSQzYbHR/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzWXL6iA4cYzUsrSVSjFSuKlSlb0Iy811qs1CGfozl7EyBd1Qw62jUv6/hqjjnVrzhrOpUzSepFLyVnJJJcXLtYHfA5fg9i9ve0vDWtaUoKTg0nODpzW1xlB7nk1xbmiYhKqt1TP8cE+zkBIA0416i3whL0xk4v2Nfue1d/zQqR/066/LmBsg8wmpLNNNHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA43SU/Jw5cTxa09UtfOL9Kz4vejidMzk7ezjBOUp3tOMYLfKTjWSiud5HbaSvNw3riz7Rwumuc429nKDcZQvKU4zX3JLw+rL1PIBoMVWFbFKNWMqcqfiuvSksnCpnWT2epe4t6JUGg68q3F1i9avPwlaorNzqZRSk/lknlFJLYl7C30EMkT2jHEyID1Bbf19JlMcTIEgAAAAAAAAAAAAAAAAAAAAAAAAAAAADjNJT2YYsm/4vaP0JKe9+1e09Y7wco4jb+CrZpPWWa5NZPlW5xi0+VcmabSNuw/rO1+NAmLV+Sud/qEIfgbwRtsJpTp0HUnKrNTq1qrTqVGtiTySSSzezLjZ0SPCZkgs9wHpGRHiUcuI08Txi3tYqVxWhSTzyUn5Ust+UVtYElHeZThLnSnhNP/2Ndriikn+ZoiLzTfh8NkKdSfO8l+VMJWkCk7vTzHb4K0zS43nLLn2xI6npjxG5clQpUYaqTbeUcs92/WJiJntCJnS/QfOtxw/x+Moz8Yo6jqRTioRkopvLOWaWzbvRb/ADhVLEKVSNeEaV3buCrRjnqTjOKlCrBPaoyWex7mmuIWrNe0kTE+HVgAhIAAAAAAAAAAAAAAAAAAAAA4zSTLJYbszUsVtY57NnykXn+Ux1sWnByjHLKMmvTvMukrzcM64s+0bFvZ0mlJwi5PNtvbm8yJc2tpipQuKkVLwqipLNLbu9OQwvFKtO4p0KibVR1I6/JUjHXUWuRxU9voXKSJHR+svL+aPo+4iIlxS0zLprj7vsKg8Xp4jc3V5cwjXTuatC3pVUp0qNCjN004wezWcoyeeXHzlpUJNuObbyy9RVvBH6quk3neqpGTwr5VpinZD8MuBXjroyoSo27pxlCUXDVjKLaaa1VvW32kLS0XTS8q9iuVQot+9yRZh5nuK62nwwxyMla6iVa1tH9GCetcV5vjy1I5+1M17fC6dtrRp57Ws5Secnlu/c7jEtzOTvntPQwRCMGXLf8p3DBdrOhXX9xV7DLG0V1vn9VZ+fhsXL0yje3WX5ZLb/ANFZ3NT5Gt/RqdllkaKvtCfVS7/dE8rzD0sPiVtgAyrgAAAAAAAAAAAAAAAAAAAABxukrzcM64s+2b9p5kfX+poaSvNwzriz7ZvWXmR5v3IlVl8MxGSz8Yllvzjl/sRKEXJ5XD549hEQ5x+U1b716iruCP1VdJvO9VS0bfeudFX8Efqq6Te96qi8dlfM/CPtMnme49H5PcVxV5k+EJiSOSxRZHX4gjmsXoZpnOLlxXP0voMPp/8AR1vEd/Lnrip8lW/pVOyy09FX2hPqtd/uSpbtNU6v9Op2WW1ou2X8cvvYZXT9OrfVMu3I9HkzuYZ8Ma2tsAGZcAAAAAAAAAAAAAAAAAAAAAOL0lwTWFtrbHGbTJ8mcsmSFj9HHmf6s0dJXm4Z1zZ9skLCPycOb92FWXwzJEXNfOJfij2ETKiQ9dfOZc8OxEIxx3TFvvXOisuB8fmi6Te96qlm2+9eorngVDOzj0m973VIlXy43T+UnqmOruNyUDXqQFY7vMvHZB3i8ojbmjrIlcQhlI1oxzPnc0zXkT9v0Xh1i/Cpr9sORxvDPkazS3Uqj/Kzv9GH1+n1Zc9+kQ+K0V4tc9GrfDkS+itN4g9ryhhU8o7Ms539fN8v9nE97Dl9yv0+f5OH27dvlbgALWcAAAAAAAAAAAAAAAAAAAAAcbpK83DOubPtk3hVPOjT/D+7ITSV5uGdc2fbOgwj6Cl+H92ETG2XwZBV187lzw+HE6GTOcuM/HXu1daGb48vBPd6c9X1NnMS66dJW33r1HDcAqGdjB8tzfd8rHd0UtmTz2riOT0cQzw6n0m/77WJmdK74+uNN6Vs+QxeKk94DM/PFSa2hltxu/dxPCC0ySllueTIamWDilgqlOcP5otJ8j4n7TgFBptNZNPJrkZ4XqeOa5eqPl9f6NkieP7f7f8AUsWLfVrno1f4ciS0U/aE+q13+5I7FY/Nrno1f4ciQ0U/aE+q13+6N3AndJYfVK6vC3AAb3lgAAAAAAAAAAAAAAAAAAAADjdJXm4Z1zZ9sn8I+gpfh/dkBpK83DOubPtE/hP0FL8L/VkSmPLPNkBUed0+ePYRM3dVRTb2JI561ra9fW5Ze7VyOaxPl3bWtJy33rnRy2jaX8Op9Jv++VjqbfeudHHaOanzCC/xN93ysc5p1V1gjdnbQMhrUZGxE5xyZasFeJw2P2fg67aXk1PLXP8Ae9/6nfVYnPcI7bWpqWW2Dz9T2P8AY55mLrx/Xdf6fm9rNH6T2cfi0Pmt10Wv8ORm0Uv+ITX+V/8APuRi8fml10Sv8OQ0UxX/AJCbyWawrJPjSd/c5r3L2FfCrqsrvU7bvC3AAbXmAAAAAAAAAAAAAAAAAAAAADjtJSyp2E+KOLWSb4oxnVUc/Q9q28XET+E/V6X4X2mfnCPBaV/bVbarnqVEtq3wknnGSfE00nn6CIwG1xC0pRoVdW8UM1GvrKE5x4nLN+dy8rzezPIBwgutvg1zs0sL8+PP+xuXGDXFWTk4RhnxOaeXsM9ngVaDTzpZrdtk8vcWTNeiIhxHVNty3bdbVzorXRxiadKdHPKVO6u9nKncVHn7yzqdhWX9rTXNTb/WR88YHfStqzqJ+bdXGt/9Lw88yKcf34mvzrcfbuM/s2i0+J7T9L/tZZo24kRgtyqsIzi81KKaJqmjHSJjtLXm0/JLMjsRpZwkuVMmFA0MSSSNOtxpk3qduBxqGVpd9EuPhyMGin7Qn1Wu/wBybfCH6tedFuPhyNTRT9oT6rXf7k4x4+iNL8+TrttbYAO1AAAAAAAAAAAAAAAAAAAAAAAAAAAB8s099XpNz8aZ9THyzT31ek3Pxpm3gf3J+v8AjNy/w/laejDE9eDoSe2D2fhLKoRKK4A3Lp3lPbsl5LL3obkyrmYYpl3Hys42ab4tT8dmWRAY7cqK3kjiOJU6UW5TUUlxsrTHOEarTeq/JWxDBhm8/wCHObLWsGPV9a3u+i3Hw5DRT9oT6rXf7kirqvrW110Wv8ORK6KftCfVa7/dE8mnTMQnDbqhbYAMy4AAAAAAAAAAAAAAAAAAAAAAAAAAA+WKe+r0m5+NM+pz5l4SWrssQvbWr5DVzVrUXLyVVoVZOpCUW9/nNbONPkNnCtEZO/6M/JiZp2S/AyKdzTfJJfqW/iWOQowflLNIonDb10ZqceLkNzEcaq1t8nkb8uD3LRM+GHHmnHEwzY/jtW6qzbm9TNqMc9mRo0ajzNI2rVZtGmsREahmyRvvKep7ba6f+Fr/AA5HQaKftCfVa7/dEQ6WrZ3PRa/w5EvopT8fm/8ALPd49c5Pnz1tnoXLkvH5s7vD1eJGqLbABjagAAAAAAAAAAAAAAAAAAAAAAAAAACF4ScFbLEoxV3QjVcM1CptjUgnvSkuL0PZ6CaAFXXuhSyeboV61B8WaUkv9jgQV5odvqf0F7ColxTbTfqlF9ou4HVb2r4nTmaxPmHzpecBcaoZ52yqpccFm3zKnKT9xGwrV7WS8Zs60PQnHN/6Z6rPp08zgpLJpST3prNMuryssfKq3Hx28w+bse4Y0na1LehSrutcQlRynTcFBSWUud5N5ZFkaGsHuIQrXlzTdGVeEKVGk01KNGMpzzkntTc6s3lzHdwwO0UtdWtvGf8APGjTUvakb6WW7YVXyTedytrSKxqH6ADh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=" alt="iPhone X" />
      </div>

      <div className="details-section">
        <h1>iPhone X</h1>
        {Object.entries(myObject1).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}

        <div className="price-info">
          <h3>Price: $899</h3>
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

export default IphoneX;
