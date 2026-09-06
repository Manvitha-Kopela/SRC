import React, { useState, useEffect, useRef, useCallback } from 'react';
import { members } from '../data/members';
import MemberModal from './MemberModal';

const VISIBLE_SIDE = 4;

function mod(n, len) {
  return ((n % len) + len) % len;
}

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

function MemberCard({ member, offset, isCenter, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [member]);

  const x = offset * 116;
  const y = Math.abs(offset) * 25;
  const rotation = offset * 11;
  const scale = isCenter ? 1 : Math.max(0.62, 1 - Math.abs(offset) * 0.10);
  const opacity = isCenter ? 1 : Math.max(0.18, 1 - Math.abs(offset) * 0.20);
  const zIndex = 20 - Math.abs(offset);

  const style = {
    transform: `translateX(calc(-50% + ${x}px)) translateY(${y}px) rotate(${rotation}deg) scale(${scale})`,
    opacity,
    zIndex
  };

  return (
    <div
      className={`arc-card ${isCenter ? 'center' : ''}`}
      style={style}
      onClick={onClick}
    >
      <div className="avatar">
        {!imgFailed && member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span>{getInitials(member.name)}</span>
        )}
      </div>
    </div>
  );
}

export default function TeamCarousel() {
  const [current, setCurrent] = useState(3); // Start with member 4 in the center
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartRef = useRef({ x: 0, y: 0 });
  const mouseDownRef = useRef({ active: false, x: 0 });

  const activeMember = members[current];

  const nextMember = useCallback(() => {
    setCurrent(prev => mod(prev + 1, members.length));
  }, []);

  const previousMember = useCallback(() => {
    setCurrent(prev => mod(prev - 1, members.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      if (e.key === 'ArrowRight') {
        nextMember();
      } else if (e.key === 'ArrowLeft') {
        previousMember();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextMember, previousMember]);

  // Touch handlers
  const handleTouchStart = (e) => {
    const touch = e.changedTouches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    setIsDragging(true);
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;

    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) {
      return;
    }

    if (dx < 0) {
      nextMember();
    } else {
      previousMember();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    mouseDownRef.current = { active: true, x: e.clientX };
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = (e) => {
      if (!mouseDownRef.current.active) return;
      mouseDownRef.current.active = false;
      setIsDragging(false);

      const dx = e.clientX - mouseDownRef.current.x;
      if (Math.abs(dx) >= 50) {
        if (dx < 0) {
          nextMember();
        } else {
          previousMember();
        }
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [nextMember, previousMember]);

  // Generate cards for the arc
  const visibleCards = [];
  for (let offset = -VISIBLE_SIDE; offset <= VISIBLE_SIDE; offset++) {
    const index = mod(current + offset, members.length);
    visibleCards.push({
      offset,
      index,
      member: members[index]
    });
  }

  const handleCardClick = (offset) => {
    setCurrent(prev => mod(prev + offset, members.length));
    setIsModalOpen(true);
  };

  const formattedCounter = `${String(current + 1).padStart(2, '0')} / ${String(members.length).padStart(2, '0')}`;
  const progressPercent = ((current + 1) / members.length) * 100;

  return (
    <section id="council-team" className="team-section">
      <div className="wrap">
        <p className="eyebrow">MEET THE TEAM</p>
        <h2>The People Behind SRC</h2>
        <p className="team-sub">DIFFERENT VOICES • A STRONGER TOMORROW</p>

        <div className="carousel-shell">
          <div
            className={`arc-stage ${isDragging ? 'dragging' : ''}`}
            id="arcStage"
            aria-label="SRC team carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            {visibleCards.map(({ offset, index, member }) => (
              <MemberCard
                key={`${index}-${offset}`}
                member={member}
                offset={offset}
                isCenter={offset === 0}
                onClick={() => handleCardClick(offset)}
              />
            ))}
          </div>

          <div className="profile">
            <p className="tap-note">TAP A MEMBER TO VIEW THEIR PROFILE</p>
            <h3 className="member-name">{activeMember.name.toUpperCase()}</h3>
            <p className="member-role">{activeMember.role.toUpperCase()}</p>
            <p className="member-dept">{activeMember.dept}</p>
            <p className="member-quote">“{activeMember.quote}”</p>

            <div className="nav-row">
              <button
                className="nav-btn"
                onClick={previousMember}
                aria-label="Previous member"
              >
                ‹
              </button>

              <div className="counter">{formattedCounter}</div>

              <button
                className="nav-btn"
                onClick={nextMember}
                aria-label="Next member"
              >
                ›
              </button>
            </div>

            <div className="progress" aria-hidden="true">
              <div
                className="progress-bar"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <p className="swipe-hint">SWIPE / DRAG TO EXPLORE</p>
            <p className="loop-note">
              THE CIRCLE NEVER ENDS • {members.length} MEMBERS
            </p>
          </div>
        </div>
      </div>

      <MemberModal
        isOpen={isModalOpen}
        member={activeMember}
        onClose={() => setIsModalOpen(false)}
        onNext={() => {
          nextMember();
        }}
      />
    </section>
  );
}
