import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Connections from './components/Connections';

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1 className="sidebar-header">Dashboard</h1>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/">Chat</Link></li>
            <li><Link to="/connections">Connections</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Welcome</h1>
        </header>
        <section className="content-area">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/connections" element={<Connections />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
