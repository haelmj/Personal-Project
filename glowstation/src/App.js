import React, { useEffect, useState } from "react";
import Forms from "./components/Forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Navbar from "./components/Nav";
//import data from "./models/products.json";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Loading2 from "./components/Loading2";
import ProductPage from "./components/ProductPage";
import Sidebar from "./components/Sidebar";
import Wishlist from "./components/Wishlist";
import axios from "axios";
import CartScreen from "./components/CartScreen";
import Wrapper from "./components/Wrapper";
import Quiz from "./components/Quiz";
import ResultsScreen from "./components/ResultsScreen";
import Loading3 from "./components/Loading3";

//import QuizContainer from "./components/QuizContainer";

//import AddWishlist from "./components/AddWishlist";

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    product.qty += quantity;
    console.log(product);
    console.log(quantity)
    setCart([...cart, product]);
  };

  const filterBy = async (code, topic) => {
    let response = await axios.get(
      `http://localhost:5000/products/${code}/${topic}`
    );
    console.log(response);

    setProducts(response.data.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(`http://localhost:5000/products`);

      return response.data;
    };
    const dataResults = async () => {
      let res = await fetchData();

      setProducts(res.products);
    };

    dataResults();
  }, []);

  const [name, setName] = useLocalStorage("", "");

  const [wishlist, setWishlist] = useState([]);

  function addProduct(id) {
    const chosenProduct = products.filter((product) => product.id === id);
    setWishlist([...wishlist, ...chosenProduct]);
  }

  function removeProduct(id) {
    const productRemoved = wishlist.filter((product) => product.id !== id);
    setWishlist(productRemoved);
  }

  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Forms name={name} setName={setName} />
          </>
        )}
      />
      <Route
        exact
        path="/loading"
        render={() => (
          <>
            <Loading />
          </>
        )}
      />
      <Route
        exact
        path="/loading2"
        render={() => (
          <>
            <Loading2 />
          </>
        )}
      />
      <Route
        exact
        path="/loading3"
        render={() => (
          <>
            <Loading3 />
          </>
        )}
      />
      <Route
        exact
        path="/cart"
        render={() => (
          <>
            <Navbar cart={cart} />
            <CartScreen cart={cart} />
          </>
        )}
      />
      <Route
        exact
        path="/home"
        render={() => (
          <>
            <Navbar cart={cart} />
            <Home name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/shop"
        render={() => (
          <>
            <Navbar cart={cart} />
            <Shop />
            <div className="shopBorder">
              <Sidebar filterBy={filterBy} />

              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                  addToCart={addToCart}
                  wishlist={wishlist}
                  removeProduct={removeProduct}
                />
              ))}
            </div>
          </>
        )}
      />
      <Route
        exact
        path="/quiz"
        render={() => (
          <>
            <Wrapper name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/routinebuilder"
        render={() => (
          <>
            <Quiz />
          </>
        )}
      />
      <Route
        exact
        path="/results"
        render={() => (
          <>
            <Navbar cart={cart} />
            <ResultsScreen name={name} />
          </>
        )}
      />
      <Route
        exact
        path="/product/:name"
        render={() => (
          <>
            <Navbar cart={cart} />

            <ProductPage cart={cart} addToCart={addToCart} />
          </>
        )}
      />
      <Route
        exact
        path="/wishlist"
        render={() => (
          <>
            <Navbar cart={cart} />
            <div>
              <Wishlist
                name={name}
                removeProduct={removeProduct}
                wishlist={wishlist}
              />
            </div>
          </>
        )}
      />
    </Router>
  );
}

export default App;
