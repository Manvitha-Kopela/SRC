import React, { useEffect, useRef, useState } from 'react';

function getInitials(name) {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .map(word => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function MemberModal({ isOpen, member, onClose, onNext }) {
  const closeBtnRef = useRef(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [member]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.classList.remove('modal-open');
      };
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!member) return null;

  return (
    <div
      className={`member-overlay ${isOpen ? 'open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div
        className="member-backdrop"
        onClick={onClose}
      ></div>

      <article
        className="member-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detailName"
      >
        <button
          ref={closeBtnRef}
          className="detail-close"
          onClick={onClose}
          aria-label="Close profile"
        >
          ×
        </button>

        <div className="detail-scroll">
          <div className="detail-header">
            <div className="detail-photo-wrap">
              <div className="detail-photo">
                {!imgFailed && member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <span>{getInitials(member.name)}</span>
                )}
              </div>
            </div>

            <div className="detail-heading">
              <p className="detail-eyebrow">{member.role}</p>
              <h2 id="detailName">{member.name}</h2>
              <p className="detail-dept">{member.dept}</p>
            </div>
          </div>

          <div className="detail-rule"></div>

          <section className="detail-section">
            <p className="detail-section-label">ABOUT</p>
            <p className="detail-about">{member.about}</p>
          </section>

          <section className="detail-section">
            <p className="detail-section-label">RESPONSIBILITIES</p>
            <div className="responsibility-list">
              {member.responsibilities?.map((resp, idx) => (
                <div key={idx} className="responsibility-item">
                  <span className="responsibility-dot"></span>
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section detail-contact-section">
            <p className="detail-section-label">SRC DETAILS</p>
            <div className="info-row">
              <span className="info-icon">✉</span>
              <div>
                <small>Email</small>
                <span>{member.email}</span>
              </div>
            </div>

            <div className="info-row">
              <span className="info-icon">◉</span>
              <div>
                <small>Area</small>
                <span>{member.area}</span>
              </div>
            </div>

            <div className="info-row">
              <span className="info-icon">□</span>
              <div>
                <small>Term</small>
                <span>{member.term}</span>
              </div>
            </div>
          </section>

          <section className="detail-quote-box">
            <span className="quote-mark">“</span>
            <p>“{member.quote}”</p>
          </section>

          <button
            className="detail-next"
            onClick={onNext}
          >
            NEXT MEMBER
            <span>→</span>
          </button>
        </div>
      </article>
    </div>
  );
}
