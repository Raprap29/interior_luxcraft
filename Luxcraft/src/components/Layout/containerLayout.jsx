import React from "react";


const ContainerLayout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='container mx-auto max-w-[1100px]'>
                {children}
            </div>
        </React.Fragment>
    )
}

export default ContainerLayout;