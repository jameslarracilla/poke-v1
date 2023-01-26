import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  ToRender: JSX.Element;
  redirect: string;
  conditional: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  ToRender,
  redirect,
  conditional,
}) => {
  return conditional ? ToRender : <Navigate to={redirect} />;
};
