import React from "react";
import { LoginActionSubmit } from "../actions/mutations/loginMutation";

const ServerAdmin = () => {

    return(
        <React.Fragment>
            <div className="flex w-full justify-center pt-20">
                <div>
                    <img alt="#" />
                </div>
                <form onSubmit={LoginActionSubmit}>
                    <div>
                        <input type="text" name="username" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ServerAdmin;