import React, { useEffect, useState } from "react";
import useStore from "./store";
import "./App.css";
import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NoLoggedInHeader from "./components/NoLoggedInHeader";
import ModalContainer from "./modals/ModalContainer";
import LoginHeader from "./components/LoginHeader";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import FavouritePage from "./pages/FavouritePage";
import CartPage from "./pages/CartPage";
import env from "react-dotenv";

function App() {
  // @ts-ignore
  const loggedInUser = useStore((state) => state.loggedInUser);
  // @ts-ignore
  const productList = useStore((state) => state.productList);
  // @ts-ignore
  const cart = useStore((state) => state.cart);
  // @ts-ignore
  const setCart = useStore((state) => state.setCart);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.quantity === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
  //       )
  //     );
  //   }
  // };

  useEffect(() => {
    if (loggedInUser) {
      fetch(`${env.API_URL}cart/${loggedInUser.id}`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_ID: loggedInUser.id,
        }),
      })
        .then((resp) => resp.json())
        .then((cart) => setCart(cart.data));
    }
  }, [loggedInUser, setCart]);

  useEffect(() => {
    if (cart && cart.products !== null) {
      let total = 0;
      let quantity = 0;
      for (const cartItem of cart.products) {
        let foundItem = productList.find(
          (product) => product.id === cartItem.itemId
        );
        total += foundItem.price * cartItem.quantity;
        quantity += cartItem.quantity;
      }
      setTotal(total);
      setQuantity(quantity);
    }
  }, [cart, productList]);

  console.log("here");
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <MainPage onAdd={onAdd} />
        </Route>
        <Route path="/detail-page" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <DetailPage />
        </Route>
        <Route path="/favourites" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <FavouritePage />
        </Route>
        <Route path="/cart" exact>
          {loggedInUser ? <LoginHeader /> : <NoLoggedInHeader />}
          <CartPage total={total} setTotal={setTotal} />
        </Route>
      </Switch>
      <ModalContainer />
    </div>
  );
}

export default App;
