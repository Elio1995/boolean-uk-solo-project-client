import create from "zustand";

const useStore = create((set, get) => ({
  modal: "",
  setModal: (modal) => set({ modal }),
  userCredentials: {
    email: null,
    password: null,
  },
  setUserCredentials: (userCredentials) => set({ userCredentials }),
  loggedInUser: null,
}));

export default useStore;
