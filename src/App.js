import React, { useState } from "react";
import "./App.css";
import Heartland from "./gateways/Heartland";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CardConnect from "./gateways/CardConnect";

function App() {
  const [token, setToken] = useState("");
  const [cvv, setCvv] = useState(false);
  const navigate = useNavigate();
  const onCancel = () => navigate("/");
  const goTo = (e) => navigate(e);
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                token={token}
                setToken={(e) => setToken(e)}
                goTo={(e) => goTo(e)}
                cvv={cvv}
                setCvv={(e) => setCvv(e)}
              />
            }
          />
          <Route
            path="/heartland"
            element={<Heartland publicKey={token} onCancel={onCancel} />}
          />
          <Route
            path="/cardconnect"
            element={<CardConnect cvv={cvv} onCancel={onCancel} />}
          />
          <Route
            path="*"
            element={
              <Home
                token={token}
                setToken={(e) => setToken(e)}
                goTo={(e) => goTo(e)}
                cvv={cvv}
                setCvv={(e) => setCvv(e)}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
