import React, { ReactNode } from 'react'
import AdminNaveBar from './AdminNaveBar';

interface IBase {
    children: ReactNode;
    name: string
}
const AdminBase = ({ children, name }: IBase) => {
    return (
        <>
            <AdminNaveBar name={name} />
            {children}

        </>
    )
}

export default AdminBase
