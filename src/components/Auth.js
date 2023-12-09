import create from "zustand";

const auth = create((set) => ({
  isAuth: true,
  login: "",
  id: "",
  signin: (data) => set({ isAuth: true, login: data.login, id: data.id }),
  signout: () => set({ isAuth: false, login: "", id: "" }),
}));

export default auth;
