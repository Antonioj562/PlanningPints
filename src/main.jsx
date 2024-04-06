import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/layout.jsx';
import DetailView from './routes/DetailView.jsx';
import { Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
      </Route>
      <Route index={false} path="/BrewCall/:id" element={<DetailView />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            <Link className='errorPage' to="/">
              Back to Home
            </Link>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
