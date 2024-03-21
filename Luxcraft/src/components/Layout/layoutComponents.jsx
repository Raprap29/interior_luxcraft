import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const LayComponents = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
                {children}
            <div className='container mx-auto'>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default LayComponents;