
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import GitHubServer from './pages/servers/GitHub';
import PlaywrightServer from './pages/servers/Playwright';
import FileSystemServer from './pages/servers/FileSystem';
import CloudflareServer from './pages/servers/Cloudflare';
import VectorizeServer from './pages/servers/Vectorize';
import WhatIsMcp from './pages/concepts/WhatIsMcp';
import AIAgents from './pages/concepts/AIAgents';
import Security from './pages/concepts/Security';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-gray-50 h-[500px]" aria-hidden="true"></div>
        <div className="relative">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl relative">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/getting-started" element={<GettingStarted />} />

              {/* Server Pages */}
              <Route path="/servers/github" element={<GitHubServer />} />
              <Route path="/servers/playwright" element={<PlaywrightServer />} />
              <Route path="/servers/filesystem" element={<FileSystemServer />} />
              <Route path="/servers/cloudflare" element={<CloudflareServer />} />
              <Route path="/servers/vectorize" element={<VectorizeServer />} />

              {/* Concept Pages */}
              <Route path="/concepts/what-is-mcp" element={<WhatIsMcp />} />
              <Route path="/concepts/ai-agents" element={<AIAgents />} />
              <Route path="/concepts/security" element={<Security />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => (
  <footer className="bg-white border-t border-gray-200/80">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold text-gray-800">MCP Server Hub</p>
          <p className="text-sm text-gray-600">Model Context Protocol</p>
        </div>
        <div className="text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MCP Server Hub. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default App;
