document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   SRC TEAM DATA

   Replace the placeholder names, roles, departments,
   photos and profile information with your real data.
========================================================= */

const members = [

  {
    name: "Member One",
    role: "President",
    dept: "CSE • E4",
    image: "images/member-01.jpg",
    about:
      "Represents the student body before the administration and helps guide the council's priorities throughout the academic year.",
    responsibilities: [
      "Represent student concerns before the administration.",
      "Coordinate major SRC decisions and council meetings.",
      "Work with other representatives on campus-wide initiatives."
    ],
    email: "member1@rguktrkv.ac.in",
    area: "Student Affairs",
    term: "SRC 2026–2027",
    quote:
      "A strong student voice begins with listening."
  },

  {
    name: "Member Two",
    role: "Vice President",
    dept: "ECE • E4",
    image: "images/member-02.jpg",
    about:
      "Supports the president and helps coordinate communication between representatives, students and institute authorities.",
    responsibilities: [
      "Support council-wide coordination.",
      "Follow up on student issues and action items.",
      "Assist in planning council initiatives."
    ],
    email: "member2@rguktrkv.ac.in",
    area: "Student Affairs",
    term: "SRC 2026–2027",
    quote:
      "Representation means turning concerns into action."
  },

  {
    name: "Member Three",
    role: "General Secretary",
    dept: "ME • E3",
    image: "images/member-03.jpg",
    about:
      "Keeps the council organized by documenting discussions, coordinating meetings and helping turn decisions into follow-up actions.",
    responsibilities: [
      "Maintain council records and meeting notes.",
      "Coordinate meeting schedules and agendas.",
      "Track council decisions and follow-ups."
    ],
    email: "member3@rguktrkv.ac.in",
    area: "Administration",
    term: "SRC 2026–2027",
    quote:
      "Good coordination turns ideas into outcomes."
  },

  {
    name: "Manvitha Kopela",
    role: "Technical Coordinator",
    dept: "CSE • E3",
    image: "images/manvitha.jpg",
    about:
      "Works on technology-focused initiatives for students and supports the council in building accessible, efficient and student-driven digital solutions.",
    responsibilities: [
      "Coordinate technical initiatives for the SRC.",
      "Support student-facing digital platforms and tools.",
      "Explore practical technology solutions for campus needs."
    ],
    email: "manvitha.kopela@rguktrkv.ac.in",
    area: "Technical Affairs",
    term: "SRC 2026–2027",
    quote:
      "Building solutions for a better student experience."
  },

  {
    name: "Member Five",
    role: "Cultural Secretary",
    dept: "CE • E3",
    image: "images/member-05.jpg",
    about:
      "Coordinates student cultural activities and helps create opportunities for students to participate, collaborate and showcase their talents.",
    responsibilities: [
      "Coordinate cultural activities and student programs.",
      "Support student clubs and creative initiatives.",
      "Help organize major cultural events."
    ],
    email: "member5@rguktrkv.ac.in",
    area: "Culture & Activities",
    term: "SRC 2026–2027",
    quote:
      "Campus life becomes memorable when everyone has a place in it."
  },

  {
    name: "Member Six",
    role: "Sports Secretary",
    dept: "EEE • E2",
    image: "images/member-06.jpg",
    about:
      "Represents student interests in sports and recreation while helping improve participation and access to campus sporting activities.",
    responsibilities: [
      "Coordinate student sports activities.",
      "Collect and communicate sports-related concerns.",
      "Support inter-batch and campus sporting events."
    ],
    email: "member6@rguktrkv.ac.in",
    area: "Sports & Recreation",
    term: "SRC 2026–2027",
    quote:
      "Participation matters more when everyone gets a chance to play."
  },

  {
    name: "Member Seven",
    role: "Joint Secretary",
    dept: "CSE • E2",
    image: "images/member-07.jpg",
    about:
      "Supports the secretary in council operations and helps ensure that tasks, communications and follow-ups move efficiently.",
    responsibilities: [
      "Assist in council administration.",
      "Coordinate communication with representatives.",
      "Track assigned council action items."
    ],
    email: "member7@rguktrkv.ac.in",
    area: "Administration",
    term: "SRC 2026–2027",
    quote:
      "Small actions, followed through consistently, create change."
  },

  {
    name: "Member Eight",
    role: "Media Coordinator",
    dept: "ECE • E2",
    image: "images/member-08.jpg",
    about:
      "Helps communicate SRC activities, announcements and outcomes clearly so students can stay informed about council work.",
    responsibilities: [
      "Coordinate SRC communications.",
      "Prepare student-facing announcements.",
      "Document and share council activities."
    ],
    email: "member8@rguktrkv.ac.in",
    area: "Media & Communications",
    term: "SRC 2026–2027",
    quote:
      "Good communication makes representation visible."
  },

  {
    name: "Member Nine",
    role: "Event Coordinator",
    dept: "CSE • E1",
    image: "images/member-09.jpg",
    about:
      "Works with students and council members to plan events, coordinate logistics and make student activities run smoothly.",
    responsibilities: [
      "Coordinate student events.",
      "Work with volunteers and student teams.",
      "Support event planning and logistics."
    ],
    email: "member9@rguktrkv.ac.in",
    area: "Events",
    term: "SRC 2026–2027",
    quote:
      "Great events begin with good teamwork."
  },

  {
    name: "Member Ten",
    role: "Class Representative",
    dept: "ME • E1",
    image: "images/member-10.jpg",
    about:
      "Connects the concerns and suggestions of their batch or class with the wider SRC, helping students have a direct channel of representation.",
    responsibilities: [
      "Collect batch-level student concerns.",
      "Communicate updates to the class.",
      "Raise relevant issues before the council."
    ],
    email: "member10@rguktrkv.ac.in",
    area: "Batch Representation",
    term: "SRC 2026–2027",
    quote:
      "Every batch deserves to be heard."
  },

  {
    name: "Member Eleven",
    role: "Class Representative",
    dept: "ECE • E1",
    image: "images/member-11.jpg",
    about:
      "Connects student feedback with SRC discussions and helps ensure that batch-specific concerns reach the right representatives.",
    responsibilities: [
      "Collect student feedback.",
      "Communicate council updates.",
      "Raise batch-level concerns."
    ],
    email: "member11@rguktrkv.ac.in",
    area: "Batch Representation",
    term: "SRC 2026–2027",
    quote:
      "Listening is the first step towards meaningful representation."
  },

  {
    name: "Member Twelve",
    role: "Class Representative",
    dept: "CE • E1",
    image: "images/member-12.jpg",
    about:
      "Represents students at the batch level and helps connect everyday campus experiences with SRC discussions.",
    responsibilities: [
      "Collect concerns from students.",
      "Share relevant updates with the batch.",
      "Support council communication."
    ],
    email: "member12@rguktrkv.ac.in",
    area: "Batch Representation",
    term: "SRC 2026–2027",
    quote:
      "A student's everyday experience matters."
  },

  {
    name: "Member Thirteen",
    role: "Class Representative",
    dept: "EEE • E1",
    image: "images/member-13.jpg",
    about:
      "Acts as a direct representative for their batch and contributes student feedback to the wider Student Representative Council.",
    responsibilities: [
      "Represent batch-level concerns.",
      "Share SRC information with students.",
      "Participate in council discussions."
    ],
    email: "member13@rguktrkv.ac.in",
    area: "Batch Representation",
    term: "SRC 2026–2027",
    quote:
      "Different perspectives make a stronger council."
  }

];


/* =========================================================
   CAROUSEL SETTINGS
========================================================= */

const VISIBLE_SIDE = 4;

// Start with member 4 in the center
let current = 3;


/* =========================================================
   MAIN DOM ELEMENTS
========================================================= */

const stage =
  document.getElementById("arcStage");

const nameEl =
  document.getElementById("mName");

const roleEl =
  document.getElementById("mRole");

const deptEl =
  document.getElementById("mDept");

const quoteEl =
  document.getElementById("mQuote");

const counterEl =
  document.getElementById("counter");

const progressBar =
  document.getElementById("progressBar");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");


/* =========================================================
   DETAIL MODAL ELEMENTS
========================================================= */

const memberOverlay =
  document.getElementById("memberOverlay");

const memberBackdrop =
  document.getElementById("memberBackdrop");

const detailClose =
  document.getElementById("detailClose");

const detailNext =
  document.getElementById("detailNext");

const detailPhoto =
  document.getElementById("detailPhoto");

const detailName =
  document.getElementById("detailName");

const detailRole =
  document.getElementById("detailRole");

const detailDept =
  document.getElementById("detailDept");

const detailAbout =
  document.getElementById("detailAbout");

const detailResponsibilities =
  document.getElementById("detailResponsibilities");

const detailEmail =
  document.getElementById("detailEmail");

const detailArea =
  document.getElementById("detailArea");

const detailTerm =
  document.getElementById("detailTerm");

const detailQuote =
  document.getElementById("detailQuote");


/* =========================================================
   INFINITE INDEX HELPER
========================================================= */

function mod(number, length) {

  return (
    (number % length) + length
  ) % length;

}


/* =========================================================
   GET INITIALS
========================================================= */

function initials(name) {

  return name
    .split(" ")
    .filter(Boolean)
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

}


/* =========================================================
   CREATE AVATAR
========================================================= */

function makeAvatar(member) {

  const avatar =
    document.createElement("div");

  avatar.className =
    "avatar";


  const img =
    document.createElement("img");

  img.src =
    member.image;

  img.alt =
    member.name;

  img.loading =
    "lazy";


  /*
    If the image is missing,
    show initials instead.
  */

  img.onerror = () => {

    img.remove();

    avatar.textContent =
      initials(member.name);

  };


  avatar.appendChild(img);

  return avatar;
}


/* =========================================================
   RENDER TEAM CAROUSEL
========================================================= */

function renderTeam() {

  stage.innerHTML = "";


  /*
    Create the members around
    the current center member.

    -4 -3 -2 -1 [0] +1 +2 +3 +4

                   CENTER
  */

  for (
    let offset = -VISIBLE_SIDE;
    offset <= VISIBLE_SIDE;
    offset++
  ) {

    const index =
      mod(
        current + offset,
        members.length
      );


    const member =
      members[index];


    const card =
      document.createElement("div");


    card.className =
      "arc-card" +
      (
        offset === 0
          ? " center"
          : ""
      );


    /*
      Half-circle positioning.
    */

    const x =
      offset * 116;


    const y =
      Math.abs(offset) * 25;


    const rotation =
      offset * 11;


    const scale =
      offset === 0
        ? 1
        : Math.max(
            0.62,
            1 -
              Math.abs(offset) *
              0.10
          );


    const opacity =
      offset === 0
        ? 1
        : Math.max(
            0.18,
            1 -
              Math.abs(offset) *
              0.20
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


    card.style.opacity =
      opacity;


    card.style.zIndex =
      String(
        20 -
        Math.abs(offset)
      );


    /*
      Add member photo.
    */

    card.appendChild(
      makeAvatar(member)
    );


    /*
      Clicking any person:

      1. Make that member the center.
      2. Open their detailed profile.
    */

    card.addEventListener(
      "click",
      () => {

        current =
          mod(
            current + offset,
            members.length
          );


        renderTeam();


        openMemberDetails();

      }
    );


    stage.appendChild(card);

  }


  updateProfile();

}


/* =========================================================
   UPDATE CENTER MEMBER
========================================================= */

function updateProfile() {

  const active =
    members[current];


  nameEl.textContent =
    active.name.toUpperCase();


  roleEl.textContent =
    active.role.toUpperCase();


  deptEl.textContent =
    active.dept;


  quoteEl.textContent =
    `“${active.quote}”`;


  counterEl.textContent =
    `${String(current + 1).padStart(2, "0")} / ${members.length}`;


  progressBar.style.width =
    `${(
      (current + 1) /
      members.length
    ) * 100}%`;

}


/* =========================================================
   NEXT MEMBER
========================================================= */

function nextMember() {

  current =
    mod(
      current + 1,
      members.length
    );


  renderTeam();

}


/* =========================================================
   PREVIOUS MEMBER
========================================================= */

function previousMember() {

  current =
    mod(
      current - 1,
      members.length
    );


  renderTeam();

}


/* =========================================================
   NAVIGATION BUTTONS
========================================================= */

nextBtn.addEventListener(
  "click",
  nextMember
);


prevBtn.addEventListener(
  "click",
  previousMember
);


/* =========================================================
   OPEN MEMBER DETAILS
========================================================= */

function openMemberDetails() {

  const member =
    members[current];


  /*
    PHOTO
  */

  detailPhoto.innerHTML = "";


  const img =
    document.createElement("img");


  img.src =
    member.image;


  img.alt =
    member.name;


  img.onerror = () => {

    detailPhoto.innerHTML =
      `<span>${initials(member.name)}</span>`;

  };


  detailPhoto.appendChild(img);


  /*
    BASIC INFORMATION
  */

  detailName.textContent =
    member.name;


  detailRole.textContent =
    member.role;


  detailDept.textContent =
    member.dept;


  /*
    ABOUT
  */

  detailAbout.textContent =
    member.about;


  /*
    RESPONSIBILITIES
  */

  detailResponsibilities.innerHTML =
    "";


  member.responsibilities.forEach(
    responsibility => {

      const row =
        document.createElement("div");


      row.className =
        "responsibility-item";


      row.innerHTML =
        `
        <span
          class="responsibility-dot"
        ></span>

        <span>
          ${responsibility}
        </span>
        `;


      detailResponsibilities.appendChild(
        row
      );

    }
  );


  /*
    SRC INFORMATION
  */

  detailEmail.textContent =
    member.email;


  detailArea.textContent =
    member.area;


  detailTerm.textContent =
    member.term;


  /*
    QUOTE
  */

  detailQuote.textContent =
    `“${member.quote}”`;


  /*
    OPEN MODAL
  */

  memberOverlay.classList.add(
    "open"
  );


  memberOverlay.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  /*
    Put keyboard focus on close
    button for accessibility.
  */

  requestAnimationFrame(
    () => {
      detailClose.focus();
    }
  );

}


/* =========================================================
   CLOSE MEMBER DETAILS
========================================================= */

function closeMemberDetails() {

  memberOverlay.classList.remove(
    "open"
  );


  memberOverlay.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

detailClose.addEventListener(
  "click",
  closeMemberDetails
);


/* =========================================================
   CLICK BACKDROP TO CLOSE
========================================================= */

memberBackdrop.addEventListener(
  "click",
  closeMemberDetails
);


/* =========================================================
   NEXT MEMBER FROM DETAIL PAGE
========================================================= */

detailNext.addEventListener(
  "click",
  () => {

    current =
      mod(
        current + 1,
        members.length
      );


    renderTeam();


    openMemberDetails();

  }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    /*
      Escape closes the detail panel.
    */

    if (
      event.key === "Escape" &&
      memberOverlay.classList.contains(
        "open"
      )
    ) {

      closeMemberDetails();

      return;

    }


    /*
      Don't control the carousel
      while the detail panel is open.
    */

    if (
      memberOverlay.classList.contains(
        "open"
      )
    ) {

      return;

    }


    /*
      Keyboard carousel controls.
    */

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


/* =========================================================
   MOBILE TOUCH SWIPE
========================================================= */

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
      touch.clientX -
      touchStartX;


    const dy =
      touch.clientY -
      touchStartY;


    /*
      Ignore small movements
      and normal vertical scrolling.
    */

    if (
      Math.abs(dx) < 40 ||
      Math.abs(dx) <
        Math.abs(dy)
    ) {

      return;

    }


    /*
      Swipe LEFT
      = NEXT
    */

    if (dx < 0) {

      nextMember();

    }


    /*
      Swipe RIGHT
      = PREVIOUS
    */

    else {

      previousMember();

    }

  },
  {
    passive: true
  }
);


/* =========================================================
   DESKTOP MOUSE DRAG
========================================================= */

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
      event.clientX -
      mouseStartX;


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


/* =========================================================
   INITIALIZE
========================================================= */

renderTeam();