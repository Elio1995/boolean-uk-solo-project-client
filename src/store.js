/* eslint-disable no-unused-vars */
import React from "react";
import create from "zustand";
// import env from "react-dotenv"
import env from "react-dotenv";

const useStore = create((set, get) => ({
  modal: "",
  setModal: (modal) => set({ modal }),

  // LOGIN STUFF
  userCredentials: {
    email: null,
    password: null,
  },
  setUserCredentials: (userCredentials) => set({ userCredentials }),
  loggedInUser: null,
  setLoginUser: async (userCredentials) => {
    const loginUser = await fetch(`${env.API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    console.log(loginUser);
    if (loginUser) {
      set({ loggedInUser: loginUser.user });
    } else {
      set({ modal: "loginError" });
    }
  },
  signUpUserCredentials: {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    street: null,
    city: null,
    phoneNumber: null,
  },
  setSignUpUserCredentials: (signUpUserCredentials) =>
    set({ signUpUserCredentials }),
  signedUpUser: null,
  setSignupUser: async (signUpUserCredentials) => {
    const signupUser = await fetch(`${env.API_URL}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpUserCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (signupUser) set({ loggedInUser: signupUser });
  },
  logOut: () => {
    set({
      loggedInUser: null,
    });
  },

  productList: null,
  setProductList: async () => {
    const productsFromServer = await fetch(`${env.API_URL}products`)
      .then((res) => res.json())
      .then((productsFromServer) =>
        set({ productList: productsFromServer.data })
      );
  },
  chooseProduct: "",
  setChooseProduct: (productId) => {
    set({ chooseProduct: productId });
  },
  favouriteProducts: null,
  setFavouriteProducts: async () => {
    const favouritesFromServer = await fetch(`${env.API_URL}favourites`)
      .then((res) => res.json())
      .then(() => set({ favouriteProducts: favouritesFromServer }));
  },
  //   inCartProducts: null,
  //   setInCartProducts: async,
  findProductById: (productId) => {
    // @ts-ignore
    return get().productList.find((product) => {
      return product.id === productId;
    });
  },

  cart: null,
  setCart: (cart) => set({ cart }),
  addToCart: async (chooseProduct) => {
    const productToCart = {
      quantity: 1,
      // @ts-ignore
      cartId: get().cart.id,
      productId: chooseProduct.id,
    };
    await fetch(`${env.API_URL}cartProducts`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToCart),
    }).then(() => {
      // @ts-ignore
      fetch(`${env.API_URL}cart/${get().loggedInUser.id}`, {
        credentials: "include",
      })
        .then((resp) => resp.json())
        // @ts-ignore
        .then((cart) => get().setCart(cart.data));
    });
  },
  decreaseQuantity: async (chooseProduct) => {
    if (chooseProduct.quantity === 1) {
      await fetch(`${env.API_URL}cartProducts/${chooseProduct.id}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "aplication/json",
        },
      }).then(() => {
        // @ts-ignore
        fetch(`${env.API_URL}cart/${get().loggedInUser.id}`, {
          credentials: "include",
        })
          .then((resp) => resp.json())
          // @ts-ignore
          .then((cart) => get().setCart(cart.data));
      });
    } else {
      await fetch(`${env.API_URL}cartProducts/${chooseProduct.id}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          qty: 1,
        }),
      }).then(() => {
        // @ts-ignore
        fetch(`${env.API_URL}cart/${get().loggedInUser.id}`, {
          credentials: "include",
        })
          .then((resp) => resp.json())
          // @ts-ignore
          .then((basket) => get().setBasket(basket.data));
      });
    }
  },

  removeCartItem: async (chooseProduct) => {
    await fetch(`${env.API_URL}cartProducts/${chooseProduct.id}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "aplication/json",
      },
    }).then(() => {
      // @ts-ignore
      fetch(`${env.API_URL}cart/${get().loggedInUser.id}`, {
        credentials: "include",
      })
        .then((resp) => resp.json())
        // @ts-ignore
        .then((cart) => get().setBasket(cart.data));
    });
  },
}));

export default useStore;
