import React from 'react';

export default function CouncilGrid() {
  const positions = [
    { title: 'President', status: 'To be added' },
    { title: 'Vice President', status: 'To be added' },
    { title: 'General Secretary', status: 'To be added' },
    { title: 'Cultural Secretary', status: 'To be added' }
  ];

  return (
    <section className="council" id="council">
      <div className="wrap">
        <h2>Current council</h2>

        <div className="council-grid">
          {positions.map((pos, index) => (
            <div key={index} className="council-card">
              <small>{pos.title}</small>
              <strong>{pos.status}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
