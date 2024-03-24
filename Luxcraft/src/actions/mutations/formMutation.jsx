import { jwtDecode } from "jwt-decode";

export const LoginActionSubmit = async (formData, setForm, loginUser, setFormError, setLoading) => {
    let errorOccurred = false;
    try{
        
        if(!formData.username || !formData.email || !formData.password){
            return setFormError("* All fields must be filled")
        }
        
        setLoading(true)
        const { data: { loginUser: { username, email, token } }  } = await loginUser({ variables: { input: formData } });
        const decodedToken = jwtDecode(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expired', decodedToken.exp);

   } catch(error) {
    errorOccurred = true; 
    if (error.message === 'Failed to login user: Incorrect email and password') {
        return setFormError("Incorrect email and password");
    } else {
        // Handle other errors
        return console.error('Error:', error.message);
    }
   } finally {
        setLoading(false);
        if (!errorOccurred) {
            setForm({
                email: "",
                username: "",
                password: "",
            });
            window.location.href = '/maintenance';
        }



   }
};
