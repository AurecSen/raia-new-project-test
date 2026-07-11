import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <p className="eyebrow">RAIA CODING AGENT</p>
      <h1>New project mode works.</h1>
      <p className="subtitle">This React site was created through the secure GitHub and Vercel toolbox.</p>
    </main>
  </React.StrictMode>,
);
