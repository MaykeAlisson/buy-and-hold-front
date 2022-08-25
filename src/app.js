import React from 'react'

import { Container, CssBaseline } from "@mui/material";

import AppBar from 'Components/AppBar'
import Routes from './routes'

const App = () => (
    <>
        <CssBaseline />
        <AppBar/>
        <Container>
            <Routes />
        </Container>
    </>
)

export default App