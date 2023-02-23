import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import ProductsList from "./Pages/ProductList/ProductsList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import React, { useState, useEffect } from "react";
import Cart from "./Pages/Cart/Cart";
import ThankYou from "./Pages/ThankYou/ThankYou";

function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/all")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  const sendFinalData = () => {
      fetch("http://localhost:8081/shopping/add", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
  };

  const itemadd = (item, qty) => {
    item.qty = qty;
    item.tamt = item.price * item.qty;

    // eslint-disable-next-line eqeqeq
    const already = cartData.find((x) => x.id == item.id);
    if (already) {
      const updaterow = cartData.map((x) =>
        // eslint-disable-next-line eqeqeq
        x.id == item.id ? { ...already, qty: already.qty + 1 } : x
      );
      setCartData(updaterow);
    } else {
      setCartData([...cartData, item]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route
              index
              element={<ProductsList productitems={data} itemadd={itemadd} />}
            />
            <Route
              path="/productdetail/:id"
              element={<ProductDetail productitems={data} itemadd={itemadd} />}
            />
            <Route path="/cart" element={<Cart cart={cartData} sendFinalData={sendFinalData} />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
