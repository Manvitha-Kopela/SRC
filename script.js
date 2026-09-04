document.getElementById("year").textContent = new Date().getFullYear();

/*
  SRC INFINITE HALF-CIRCLE CAROUSEL
  ---------------------------------
  - 13 members
  - Infinite loop
  - The active member is always in the center
  - Neighbouring members follow a half-circle
  - Far members are partially outside the screen
  - Swipe left/right on mobile
  - Drag left/right on desktop
  - Click a side member to bring it to center
*/

const members = [
  {
    name: "Member One",
    role: "President",
    dept: "CSE • E4",
    image: "images/member-01.jpg"
  },
  {
    name: "Member Two",
    role: "Vice President",
    dept: "ECE • E4",
    image: "images/member-02.jpg"
  },
  {
    name: "Member Three",
    role: "General Secretary",
    dept: "ME • E3",
    image: "images/member-03.jpg"
  },
  {
    name: "Manvitha Kopela",
    role: "Technical Coordinator",
    dept: "CSE • E3",
    quote: "Building solutions for a better student experience.",
    image: "images/manvitha.jpg"
  },
  {
    name: "Member Five",
    role: "Cultural Secretary",
    dept: "CE • E3",
    image: "images/member-05.jpg"
  },
  {
    name: "Member Six",
    role: "Sports Secretary",
    dept: "EEE • E2",
    image: "images/member-06.jpg"
  },
  {
    name: "Member Seven",
    role: "Joint Secretary",
    dept: "CSE • E2",
    image: "images/member-07.jpg"
  },
  {
    name: "Member Eight",
    role: "Media Coordinator",
    dept: "ECE • E2",
    image: "images/member-08.jpg"
  },
  {
    name: "Member Nine",
    role: "Event Coordinator",
    dept: "CSE • E1",
    image: "images/member-09.jpg"
  },
  {
    name: "Member Ten",
    role: "Class Representative",
    dept: "ME • E1",
    image: "images/member-10.jpg"
  },
  {
    name: "Member Eleven",
    role: "Class Representative",
    dept: "ECE • E1",
    image: "images/member-11.jpg"
  },
  {
    name: "Member Twelve",
    role: "Class Representative",
    dept: "CE • E1",
    image: "images/member-12.jpg"
  },
  {
    name: "Member Thirteen",
    role: "Class Representative",
    dept: "EEE • E1",
    image: "images/member-13.jpg"
  }
].map(member => ({
  quote: "Working towards a stronger student voice.",
  ...member
}));


/* -------------------------------------------------------
   SETTINGS
------------------------------------------------------- */

const VISIBLE_SIDE = 4;

// Start at member 4
let current = 3;


/* -------------------------------------------------------
   DOM ELEMENTS
------------------------------------------------------- */

const stage = document.getElementById("arcStage");

const nameEl = document.getElementById("mName");
const roleEl = document.getElementById("mRole");
const deptEl = document.getElementById("mDept");
const quoteEl = document.getElementById("mQuote");

const counterEl = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


/* -------------------------------------------------------
   HELPER: INFINITE INDEX
------------------------------------------------------- */

function mod(number, length) {
  return ((number % length) + length) % length;
}


/* -------------------------------------------------------
   HELPER: INITIALS
------------------------------------------------------- */

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}


/* -------------------------------------------------------
   CREATE AVATAR
------------------------------------------------------- */

function makeAvatar(member) {

  const avatar = document.createElement("div");
  avatar.className = "avatar";

  const img = document.createElement("img");

  img.src = member.image;
  img.alt = member.name;
  img.loading = "lazy";

  /*
    If image does not exist,
    show initials instead.
  */

  img.onerror = () => {

    img.remove();

    avatar.textContent = initials(member.name);

  };

  avatar.appendChild(img);

  return avatar;
}


/* -------------------------------------------------------
   RENDER TEAM
------------------------------------------------------- */

function renderTeam() {

  stage.innerHTML = "";


  /*
    Create cards around current member.

    Example:

             -4   -3   -2   -1   0   +1   +2   +3   +4

                           CENTER
                              ↓
                            MEMBER
  */

  for (
    let offset = -VISIBLE_SIDE;
    offset <= VISIBLE_SIDE;
    offset++
  ) {

    const index = mod(
      current + offset,
      members.length
    );

    const member = members[index];


    /* Card */

    const card = document.createElement("div");

    card.className =
      "arc-card" +
      (offset === 0 ? " center" : "");


    /*
      POSITIONING

      Center = largest

      Near members = smaller

      Outer members =
      pushed further to edge
      and partially clipped
    */

    const x = offset * 116;

    const y =
      Math.abs(offset) * 25;

    const rotation =
      offset * 11;

    const scale =
      offset === 0
        ? 1
        : Math.max(
            0.62,
            1 - Math.abs(offset) * 0.10
          );

    const opacity =
      offset === 0
        ? 1
        : Math.max(
            0.18,
            1 - Math.abs(offset) * 0.20
          );


    card.style.transform =
      `
      translateX(
        calc(-50% + ${x}px)
      )
      translateY(${y}px)
      rotate(${rotation}deg)
      scale(${scale})
      `;

    card.style.opacity = opacity;

    card.style.zIndex =
      String(
        20 - Math.abs(offset)
      );


    /* Avatar */

    card.appendChild(
      makeAvatar(member)
    );


    /*
      Clicking a side member
      moves that member to center.
    */

    card.addEventListener(
      "click",
      () => {

        if (offset !== 0) {

          current =
            mod(
              current + offset,
              members.length
            );

          renderTeam();

        }

      }
    );


    stage.appendChild(card);
  }


  /* ---------------------------------------------------
     UPDATE ACTIVE MEMBER DETAILS
  --------------------------------------------------- */

  const activeMember =
    members[current];


  nameEl.textContent =
    activeMember.name.toUpperCase();

  roleEl.textContent =
    activeMember.role.toUpperCase();

  deptEl.textContent =
    activeMember.dept;

  quoteEl.textContent =
    `“${activeMember.quote}”`;


  /* ---------------------------------------------------
     COUNTER

     01 / 13
     02 / 13
     03 / 13
     ...
  --------------------------------------------------- */

  counterEl.textContent =
    `${String(current + 1).padStart(2, "0")} / ${members.length}`;


  /* ---------------------------------------------------
     PROGRESS BAR
  --------------------------------------------------- */

  progressBar.style.width =
    `${((current + 1) / members.length) * 100}%`;
}


/* -------------------------------------------------------
   NEXT MEMBER

   13 → 1
------------------------------------------------------- */

function nextMember() {

  current =
    mod(
      current + 1,
      members.length
    );

  renderTeam();
}


/* -------------------------------------------------------
   PREVIOUS MEMBER

   1 → 13
------------------------------------------------------- */

function previousMember() {

  current =
    mod(
      current - 1,
      members.length
    );

  renderTeam();
}


/* -------------------------------------------------------
   BUTTON CONTROLS
------------------------------------------------------- */

nextBtn.addEventListener(
  "click",
  nextMember
);

prevBtn.addEventListener(
  "click",
  previousMember
);


/* -------------------------------------------------------
   MOBILE TOUCH SWIPE
------------------------------------------------------- */

let touchStartX = 0;
let touchStartY = 0;


stage.addEventListener(
  "touchstart",
  event => {

    const touch =
      event.changedTouches[0];

    touchStartX =
      touch.clientX;

    touchStartY =
      touch.clientY;

    stage.classList.add(
      "dragging"
    );

  },
  {
    passive: true
  }
);


stage.addEventListener(
  "touchend",
  event => {

    stage.classList.remove(
      "dragging"
    );


    const touch =
      event.changedTouches[0];

    const dx =
      touch.clientX - touchStartX;

    const dy =
      touch.clientY - touchStartY;


    /*
      Ignore very small movements
      and vertical scrolling.
    */

    if (
      Math.abs(dx) < 40 ||
      Math.abs(dx) < Math.abs(dy)
    ) {
      return;
    }


    /*
      Swipe LEFT
      = next member
    */

    if (dx < 0) {

      nextMember();

    }


    /*
      Swipe RIGHT
      = previous member
    */

    else {

      previousMember();

    }

  },
  {
    passive: true
  }
);


/* -------------------------------------------------------
   DESKTOP MOUSE DRAG
------------------------------------------------------- */

let mouseDown = false;
let mouseStartX = 0;


stage.addEventListener(
  "mousedown",
  event => {

    mouseDown = true;

    mouseStartX =
      event.clientX;

    stage.classList.add(
      "dragging"
    );

  }
);


window.addEventListener(
  "mouseup",
  event => {

    if (!mouseDown) {
      return;
    }


    mouseDown = false;

    stage.classList.remove(
      "dragging"
    );


    const dx =
      event.clientX - mouseStartX;


    if (
      Math.abs(dx) >= 50
    ) {

      if (dx < 0) {

        nextMember();

      } else {

        previousMember();

      }

    }

  }
);


/* -------------------------------------------------------
   KEYBOARD SUPPORT
------------------------------------------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowRight"
    ) {

      nextMember();

    }

    if (
      event.key === "ArrowLeft"
    ) {

      previousMember();

    }

  }
);


/* -------------------------------------------------------
   INITIAL LOAD
------------------------------------------------------- */

renderTeam();