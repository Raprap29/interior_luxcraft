import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: ""
  });

  const [formError, setFormError] = useState("");

  const [login, setLogin] = useState(false);

  const [Loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ form, setForm, login, setLogin, formError, setFormError, Loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
