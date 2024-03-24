import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Maintenance = () => {

    const {setLogin, login} = useContext(AppContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expired');
        setLogin(false);
        window.location.href = '/admin/server';
    }

    return(
        <React.Fragment>
            {login && (
                <div className="container mx-auto max-w-[1100px]">
                    <p>MAINTENANCE</p>
                    <button onClick={handleLogout} type="button" className="btn btn-primary">LOGOUT</button>
                </div>
            )}
        </React.Fragment>
    )
}

export default Maintenance;