import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ padding: '4rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>FluxFrame</h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>
        Your workflow. Reimagined by AI.
      </p>
      <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1rem', background: '#000', color: '#fff', border: 'none', borderRadius: '0.5rem' }}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
