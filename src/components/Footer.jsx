import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          &copy; <span>{year}</span> Student Representative Council, RGUKT RK Valley
        </p>
      </div>
    </footer>
  );
}
