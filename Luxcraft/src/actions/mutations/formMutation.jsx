import { jwtDecode } from "jwt-decode";

export const LoginActionSubmit = async (formData, setForm, loginUser, setFormError, setLoading) => {
    try{
        
        if(!formData.username || !formData.email || !formData.password){
            return setFormError("* All fields must be filled")
        }
        
        setLoading(true)
        const { data: { loginUser: { username, email, token } }, error  } = await loginUser({ variables: { input: formData } });
        const decodedToken = jwtDecode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expired', decodedToken.exp);

   } catch(err) {
        throw new Error(`Error: ${err.message}`);
   }finally{
        setForm({
            email: "",
            username: "",
            password: "",
        });
        setLoading(false);

   }
};
