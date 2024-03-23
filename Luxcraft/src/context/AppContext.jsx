import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [login, setLogin] = useState(false);

  return (
    <AppContext.Provider value={{ form, setForm, login, setLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
