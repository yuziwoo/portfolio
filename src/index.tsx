import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { MouseCursorProvider } from './components/provider/MouseCursorProvider/MouseCursorProvider';
import './global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MouseCursorProvider>
        <RouterProvider router={router} />
      </MouseCursorProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
