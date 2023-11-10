import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Ejercicio = React.lazy(() => import("pages/Ejercicio"));
const Perfil = React.lazy(() => import("pages/Perfil"));
const Index = React.lazy(() => import("pages/Index"));
const Seleccionarlenguaje = React.lazy(() =>
  import("pages/Seleccionarlenguaje"),
);
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/seleccionarlenguaje"
            element={<Seleccionarlenguaje />}
          />
          <Route path="/index" element={<Index />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/ejercicio" element={<Ejercicio />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
