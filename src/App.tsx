import React, { useState } from "react";
import "./App.css";
import './App.css';
import Router from './components/Router';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: 0,
                    },
                },
            })
    );
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </div>
    );
}

export default App;