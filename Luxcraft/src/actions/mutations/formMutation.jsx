export const LoginActionSubmit = async (e, formData, setForm) => {
    e.preventDefault();
    try{
        
        setForm({
            email: "",
            username: "",
            password: "",
        })

   }catch(err)
   {
    throw new Error(`Error: ${err.message}`);
   }
}