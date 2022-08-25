import React from "react";
import {ReactDOM} from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import { ptBR } from "@mui/material/locale";

import {LoadingProvider} from 'Contexts/loading';
import Loading from 'Components/CustomLoading';
import {MessageProvider} from 'Contexts/message';
import App from "./app";

const theme = createTheme({
    palette: {
        primary: {
            main: '#363636'
        }
    },
    status: {
        danger: 'orange',
    },
}, ptBR);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<BrowserRouter>
    <ThemeProvider theme={theme}>
        <LoadingProvider>
            <Loading>
                <MessageProvider>
                    <App />
                </MessageProvider>
            </Loading>
        </LoadingProvider>
    </ThemeProvider>
</BrowserRouter>
);
