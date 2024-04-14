import React, { ReactNode } from 'react'
import Footer from './Footer/Footer';
import Navebar from './Header/Navebar';
import Topheader from './Header/Topheader';

interface IBase {
    children: ReactNode;
}
const Base = ({ children }: IBase) => {
    return (
        <>
            <Topheader />
            <Navebar />
            {children}
            <Footer />
        </>
    )
}

export default Base
