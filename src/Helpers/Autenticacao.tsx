import React from 'react';
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { Autenticacao_Context, useAutenticacao } from "./Context";

{/*export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }*/}