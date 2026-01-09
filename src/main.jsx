import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { router } from "./router/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContexts/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import {
  
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
AOS.init();
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <Toaster position="top-center" />
       <RouterProvider router={router} />,
     </AuthProvider>
     </QueryClientProvider>
     
    </div>
  </StrictMode>
); 