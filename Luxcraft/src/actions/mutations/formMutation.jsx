export const LoginActionSubmit = async (formData, setForm, loginUser) => {
    try{
        const { data: { loginUser: { username, email, token } }  } = await loginUser({ variables: { input: formData } });

        localStorage.setItem('token', token);

        setForm({
            email: "",
            username: "",
            password: "",
        });

   } catch(err) {
        throw new Error(`Error: ${err.message}`);
   }
};
