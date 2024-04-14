import React, { ReactNode } from 'react'
import Container from '@mui/material/Container';

interface MainContainer {
    children: ReactNode;
}

const MainContainer = ({ children }: MainContainer) => {

    return (
        <>
            <Container maxWidth="xl">
                {children}
            </Container>

        </>
    )
}

export default MainContainer
