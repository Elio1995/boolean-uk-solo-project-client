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
}));

export default useStore;
