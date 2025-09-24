import React from 'react';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <Home size={24} /> Update du Portfolio v2025
      </h1>
      <nav>
        <ul className="flex gap-4">
          <li>Accueil</li>
          <li>Projets</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
