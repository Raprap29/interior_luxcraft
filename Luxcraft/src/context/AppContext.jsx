import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: ""
  });

  return (
    <AppContext.Provider value={{ form, setForm }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
