import React, { useContext, useEffect } from "react";
import { LoginActionSubmit } from "../actions/mutations/formMutation";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AppContext } from "../context/AppContext";
import { LOGIN_USER } from "../graphql/mutation";
import { useMutation } from '@apollo/client';



const ServerAdmin = () => {

    const { form, setForm, login } = useContext(AppContext);
    const [loginUser] = useMutation(LOGIN_USER);
    const useLoginFormChange = (e) => {
        try {
            setForm({...form, [e.target.name]: e.target.value});
        } catch (err) {
            throw new Error("Error: " + err.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        LoginActionSubmit(form, setForm, loginUser);
    };

    return(
        <React.Fragment>
            {!login && (
                <section style={{
                    backgroundImage: "radial-gradient(125% 125% at 50% 0%, #020617 50%, #DD335C)"
                }}
                className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
                >
                <div className="z-10 relative w-full lg:w-[300px]">
                    <form onSubmit={handleSubmit} className="w-full px-[20px] lg:max-w-[300px] rounded-[5px] flex flex-col gap-y-[10px] bg-[#fff] p-4">
                        <div className="flex justify-center w-full">
                            <a className="btn text-black btn-ghost text-xl">Luxcraft Admin</a>
                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input value={form.email} onChange={useLoginFormChange} type="text" className="grow" name="email" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input value={form.username} onChange={useLoginFormChange} type="text" className="grow" name="username" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input value={form.password} onChange={useLoginFormChange} type="password" className="grow" name="password" placeholder="Password" />
                        </label>
                        <div className="w-full">
                            <button className="btn btn-primary w-full font-bold text-white">LOGIN</button>
                        </div>
                    </form>
                </div>
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Stars radius={50} count={1000} factor={4} fade speed={2} />
                    </Canvas>
                </div>
                    
                </section>
            )}
        </React.Fragment>
    )
}

export default ServerAdmin;
