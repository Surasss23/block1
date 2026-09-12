/* =========================================================
   BAL GANESH MITRA MANDAL
   GANESH UTSAV 2026
   Main website JavaScript
   ========================================================= */


/* =========================================================
   1. SITE CONFIGURATION
   ========================================================= */

const SITE_CONFIG = {

  mandalName: "Bal Ganesh Mitra Mandal",

  year: 2026,

  /*
    Add your hero image here later:

    heroImage: "images/hero.jpg"
  */
  heroImage: "",

  /*
    Add your group photo here later:

    groupPhoto: "images/group-photo.jpg"
  */
  groupPhoto: "",

  location: {
    name: "Bal Ganesh Mitra Mandal",
    address: "Address will be added here.",
    mapsUrl: ""
  },

  social: {
    instagram: ""
  },

  /*
    Only enter the exact time when you know it.

    Example:
    time: "18:30"

    If left empty, website will simply show:
    SHAM KO • TIME TO BE ANNOUNCED

    This avoids inventing an exact Aagman time.
  */
  agaman: {
    date: "2026-09-13",
    time: ""
  }

};


/* =========================================================
   2. DAILY SCHEDULE
   ========================================================= */

const DAILY_SCHEDULE = [

  {
    date: "2026-09-13",
    day: "SUNDAY",
    title: "BAPPA AAGMAN",
    time: "SHAM KO",
    description: "Pehli dastak, pehli khushi.",
    image: "",
    status: "UP NEXT",
    visible: true
  },

  {
    date: "2026-09-14",
    day: "MONDAY",
    title: "DAY 2",
    time: "",
    description: "Har subah Bappa ke naam.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-15",
    day: "TUESDAY",
    title: "DAY 3",
    time: "",
    description: "Utsav jaari hai.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-16",
    day: "WEDNESDAY",
    title: "ANNAM PRASADAM",
    time: "",
    description: "Prasad ka swaad, Bappa ka aashirwad.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-17",
    day: "THURSDAY",
    title: "DAY 5",
    time: "",
    description: "Har pal ek nayi yaad.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-18",
    day: "FRIDAY",
    title: "DAY 6",
    time: "",
    description: "Bappa ke saath ek aur khoobsurat din.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-19",
    day: "SATURDAY",
    title: "DAY 7",
    time: "",
    description: "Utsav apne aakhri rangon ki taraf.",
    image: "",
    status: "",
    visible: true
  },

  {
    date: "2026-09-20",
    day: "SUNDAY",
    title: "VISARJAN",
    time: "",
    description: "Aankhon mein yaadein, dil mein Bappa.",
    image: "",
    status: "",
    visible: true
  }

];


/* =========================================================
   3. MEMORIES
   ========================================================= */

const MEMORIES = [

  {
    type: "photo",
    category: "events",
    date: "2026-09-13",
    title: "Bappa Aagman",
    caption: "The first arrival.",
    media: "",
    visible: true
  },

  {
    type: "photo",
    category: "behind",
    date: "2026-09-13",
    title: "Behind The Scenes",
    caption: "Making the first celebration special.",
    media: "",
    visible: true
  },

  {
    type: "photo",
    category: "aarti",
    date: "2026-09-14",
    title: "Aarti",
    caption: "A moment of devotion.",
    media: "",
    visible: true
  },

  {
    type: "video",
    category: "events",
    date: "2026-09-14",
    title: "Utsav Moments",
    caption: "A little glimpse from the celebration.",
    media: "",
    visible: true
  },

  {
    type: "photo",
    category: "photo",
    date: "2026-09-15",
    title: "Together",
    caption: "The people who make the mandal.",
    media: "",
    visible: true
  },

  {
    type: "photo",
    category: "behind",
    date: "2026-09-16",
    title: "Little Moments",
    caption: "The memories between the celebrations.",
    media: "",
    visible: true
  }

];


/* =========================================================
   4. OUR PEOPLE
   ========================================================= */

const PEOPLE = [

  {
    name: "Member Name",
    role: "Mandal Member",
    image: "",
    visible: false
  },

  {
    name: "Member Name",
    role: "Mandal Member",
    image: "",
    visible: false
  },

  {
    name: "Member Name",
    role: "Mandal Member",
    image: "",
    visible: false
  },

  {
    name: "Member Name",
    role: "Mandal Member",
    image: "",
    visible: false
  }

];


/* =========================================================
   5. LADDU AUCTION
   ========================================================= */

const AUCTION_CONFIG = {

  /*
    false = Auction section stays hidden.

    Change to true when auction is ready.
  */
  enabled: false,

  title: "Laddu Auction",

  startingBid: 100,

  currentBid: 0,

  endDate: "",

  description: "Bappa ka prasad, yaadon ka hissa."

};


/* =========================================================
   6. DONATION
   ========================================================= */

const DONATION_CONFIG = {

  /*
    false = Donation section stays hidden.

    Change to true when you are ready.
  */
  enabled: false,

  /*
    Example:

    upiId: "yourname@upi"
  */
  upiId: "",

  merchantName: "Bal Ganesh Mitra Mandal",

  phoneNumber: "",

  notePrefix: "DN"

};


/* =========================================================
   7. HELPERS
   ========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);


const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


function esc(value = "") {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


function placeholderHTML(label = "IMAGE") {

  return `
    <div class="media-placeholder">
      <span>${esc(label)}</span>
    </div>
  `;

}


function mediaStyle(url) {

  if (!url) return "";

  return `background-image:url("${String(url).replaceAll('"', '\\"')}");`;

}


function parseEventDate(date, time = "") {

  if (!date) return null;

  return new Date(
    `${date}T${time || "23:59"}:00`
  );

}


function formatDate(dateString) {

  if (!dateString) return "";

  const parts = dateString.split("-");

  if (parts.length !== 3) return dateString;

  const date = new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short"
  }).toUpperCase();

}


function formatFullDate(dateString) {

  if (!dateString) return "";

  const parts = dateString.split("-");

  if (parts.length !== 3) return dateString;

  const date = new Date(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2])
  );

  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).toUpperCase();

}


function safeExternal(url) {

  if (!url) return "#";

  try {

    const parsed = new URL(url);

    if (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:"
    ) {
      return parsed.href;
    }

  } catch (error) {
    return "#";
  }

  return "#";

}


/* =========================================================
   8. EVENT STATUS
   ========================================================= */

function getStatus(event) {

  const now = new Date();

  const start = parseEventDate(
    event.date,
    event.time
  );

  if (!start) return "";

  /*
    A simple status system.

    Before event:
    UP NEXT

    Same day / event passed:
    COMPLETED
  */

  const eventDate = new Date(`${event.date}T00:00:00`);
  const today = new Date();

  eventDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (eventDate.getTime() > today.getTime()) {
    return "UP NEXT";
  }

  if (eventDate.getTime() < today.getTime()) {
    return "COMPLETED";
  }

  /*
    If today but exact time isn't known,
    keep it as TODAY.
  */

  if (!event.time) {
    return "TODAY";
  }

  if (now < start) {
    return "UP NEXT";
  }

  return "TODAY";

}


/* =========================================================
   9. SETUP SITE CONFIG
   ========================================================= */

function setupConfig() {

  document.title =
    `${SITE_CONFIG.mandalName} | Ganesh Utsav ${SITE_CONFIG.year}`;


  const metaDescription =
    $('meta[name="description"]');

  if (metaDescription) {

    metaDescription.setAttribute(
      "content",
      `${SITE_CONFIG.mandalName} — Ganesh Utsav ${SITE_CONFIG.year}. Ek nayi shuruaat, Bappa ke saath.`
    );

  }


  const hero = $("#heroImage");

  if (hero) {

    if (SITE_CONFIG.heroImage) {

      hero.style.backgroundImage =
        `url("${SITE_CONFIG.heroImage}")`;

      hero.classList.remove("media-placeholder");

      hero.innerHTML = "";

    }

  }


  const groupPhoto = $("#groupPhoto");

  if (groupPhoto) {

    if (SITE_CONFIG.groupPhoto) {

      groupPhoto.style.backgroundImage =
        `url("${SITE_CONFIG.groupPhoto}")`;

      groupPhoto.classList.remove("media-placeholder");

      groupPhoto.innerHTML = "";

    }

  }


  const locationName = $("#locationName");

  if (locationName) {
    locationName.textContent =
      SITE_CONFIG.location.name;
  }


  const locationAddress = $("#locationAddress");

  if (locationAddress) {
    locationAddress.textContent =
      SITE_CONFIG.location.address;
  }


  const directions = $("#directionsLink");

  if (directions) {

    if (SITE_CONFIG.location.mapsUrl) {

      directions.href =
        safeExternal(SITE_CONFIG.location.mapsUrl);

    } else {

      directions.href = "#";

      directions.setAttribute(
        "aria-disabled",
        "true"
      );

      directions.addEventListener("click", e => {
        e.preventDefault();
      });

    }

  }


  const instagram = $("#instagramLink");

  if (instagram) {

    if (SITE_CONFIG.social.instagram) {

      instagram.href =
        safeExternal(SITE_CONFIG.social.instagram);

    } else {

      instagram.href = "#";

      instagram.addEventListener("click", e => {
        e.preventDefault();
      });

    }

  }


  const momentDate = $("#momentDate");

  if (momentDate) {

    momentDate.textContent =
      formatFullDate(SITE_CONFIG.agaman.date);

  }


  const momentTime = $("#momentTime");

  if (momentTime) {

    if (SITE_CONFIG.agaman.time) {

      momentTime.textContent =
        SITE_CONFIG.agaman.time;

    } else {

      momentTime.textContent =
        "SHAM KO • TIME TO BE ANNOUNCED";

    }

  }

}


/* =========================================================
   10. RENDER DAILY SCHEDULE
   ========================================================= */

function renderDaily() {

  const root = $("#dailySchedule");

  if (!root) return;

  const events =
    DAILY_SCHEDULE.filter(event => event.visible !== false);

  if (!events.length) {

    root.innerHTML = `
      <div class="empty-state">
        Schedule will be added soon.
      </div>
    `;

    return;
  }


  root.innerHTML = events.map(event => {

    const status =
      getStatus(event);

    const image = event.image
      ? `
        <div
          class="timeline-media"
          style="background-image:url('${esc(event.image)}');background-size:cover;background-position:center;"
        ></div>
      `
      : placeholderHTML("BAPPA");


    return `
      <article
        class="timeline-item reveal ${status === "UP NEXT" ? "up-next" : ""}"
      >

        <div class="timeline-date">

          <strong>
            ${esc(event.day)}
          </strong>

          <br>

          <span>
            ${esc(formatDate(event.date))}
          </span>

        </div>


        <div class="timeline-main">

          <div class="timeline-copy">

            <div class="timeline-time">
              ${esc(event.time || "TIME TO BE ANNOUNCED")}
            </div>

            <h3>
              ${esc(event.title)}
            </h3>

            <p>
              ${esc(event.description)}
            </p>

            ${
              status
              ? `
                <span class="timeline-status">
                  ${esc(status)}
                </span>
              `
              : ""
            }

          </div>


          ${image}

        </div>

      </article>
    `;

  }).join("");

}


/* =========================================================
   11. UP NEXT
   ========================================================= */

function renderUpNext() {

  const events =
    DAILY_SCHEDULE.filter(
      event => event.visible !== false
    );

  if (!events.length) return;

  const now = new Date();

  let nextEvent = null;

  for (const event of events) {

    const date = parseEventDate(
      event.date,
      event.time
    );

    if (!date) continue;

    if (date > now) {

      nextEvent = event;
      break;

    }

  }


  if (!nextEvent) return;


  const items =
    $$(".timeline-item");

  const index =
    events.indexOf(nextEvent);

  if (items[index]) {

    items[index].classList.add("up-next");

  }

}


/* =========================================================
   12. MEMORIES
   ========================================================= */

let activeMemoryFilter = "all";


function renderMemories(filter = activeMemoryFilter) {

  const root = $("#memoryGrid");

  if (!root) return;


  const memories =
    MEMORIES.filter(
      memory => memory.visible !== false
    );


  const filtered =
    filter === "all"
      ? memories
      : memories.filter(memory => {

          if (filter === "photo") {
            return memory.type === "photo";
          }

          if (filter === "video") {
            return memory.type === "video";
          }

          return memory.category === filter;

        });


  if (!filtered.length) {

    root.innerHTML = `
      <div class="memory-empty">
        More memories will join this story.
      </div>
    `;

    return;
  }


  root.innerHTML =
    filtered.map((memory, index) => {

      const originalIndex =
        MEMORIES.indexOf(memory);


      let media = "";


      if (
        memory.media &&
        memory.type === "video"
      ) {

        media = `
          <video
            src="${esc(memory.media)}"
            muted
            playsinline
            preload="metadata"
          ></video>
        `;

      } else if (
        memory.media &&
        memory.type === "photo"
      ) {

        media = `
          <img
            src="${esc(memory.media)}"
            alt="${esc(memory.title)}"
            loading="lazy"
          >
        `;

      } else {

        media = `
          <div class="memory-placeholder-text">
            ${esc(
              memory.type === "video"
                ? "REEL PLACEHOLDER"
                : "PHOTO PLACEHOLDER"
            )}
          </div>
        `;

      }


      return `
        <article
          class="memory-card reveal"
          data-memory-index="${originalIndex}"
          tabindex="0"
          role="button"
          aria-label="Open ${esc(memory.title)}"
        >

          <div class="memory-card-media">

            ${media}

            <div class="memory-card-overlay">

              <div class="memory-card-title">
                ${esc(memory.title)}
              </div>

              <div class="memory-card-meta">
                ${esc(formatDate(memory.date))}
              </div>

            </div>

          </div>

        </article>
      `;

    }).join("");


  $$(".memory-card", root)
    .forEach(card => {

      card.addEventListener("click", () => {

        openMemory(
          Number(card.dataset.memoryIndex)
        );

      });


      card.addEventListener("keydown", event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openMemory(
            Number(card.dataset.memoryIndex)
          );

        }

      });

    });


  observeReveals();

}


/* =========================================================
   13. MEMORY FILTERS
   ========================================================= */

function setupMemoryFilters() {

  const root =
    $("#memoryFilters");

  if (!root) return;


  root.addEventListener("click", event => {

    const button =
      event.target.closest(".filter-btn");

    if (!button) return;


    $$(".filter-btn", root)
      .forEach(btn =>
        btn.classList.remove("active")
      );


    button.classList.add("active");


    activeMemoryFilter =
      button.dataset.filter || "all";


    renderMemories(
      activeMemoryFilter
    );

  });

}


/* =========================================================
   14. OUR PEOPLE
   ========================================================= */

function renderPeople() {

  const root =
    $("#peopleGrid");

  if (!root) return;


  const people =
    PEOPLE.filter(
      person => person.visible !== false
    );


  if (!people.length) {

    root.innerHTML = `
      <div class="memory-empty">
        Our people will be added soon.
      </div>
    `;

    return;
  }


  root.innerHTML =
    people.map(person => {

      const image =
        person.image
          ? `
            <div
              class="person-image"
              style="background-image:url('${esc(person.image)}');background-size:cover;background-position:center;"
            ></div>
          `
          : `
            <div class="person-image media-placeholder">
              <span>PHOTO</span>
            </div>
          `;


      return `
        <article class="person-card reveal">

          ${image}

          <div class="person-info">

            <div class="person-name">
              ${esc(person.name)}
            </div>

            <div class="person-role">
              ${esc(person.role)}
            </div>

          </div>

        </article>
      `;

    }).join("");


  observeReveals();

}


/* =========================================================
   15. EVENTS
   ========================================================= */

function renderEvents() {

  const root =
    $("#eventsList");

  if (!root) return;


  const events =
    DAILY_SCHEDULE.filter(
      event => event.visible !== false
    );


  if (!events.length) {

    root.innerHTML = `
      <div class="memory-empty">
        Events will be added soon.
      </div>
    `;

    return;
  }


  root.innerHTML =
    events.map(event => {

      return `
        <article class="event-row reveal">

          <div class="event-row-date">

            ${esc(event.day)}

            <br>

            ${esc(formatDate(event.date))}

          </div>


          <div>

            <div class="event-row-title">
              ${esc(event.title)}
            </div>

            <div class="event-row-desc">
              ${esc(event.description)}
            </div>

          </div>


          <div class="event-row-time">
            ${esc(event.time || "TIME TBA")}
          </div>

        </article>
      `;

    }).join("");


  observeReveals();

}


/* =========================================================
   16. COUNTDOWN
   ========================================================= */

function setupCountdown() {

  const date =
    SITE_CONFIG.agaman.date;

  const time =
    SITE_CONFIG.agaman.time;


  const countdown =
    $(".countdown");

  const timeEl =
    $("#momentTime");


  if (!date) return;


  /*
    Important:
    If exact time isn't configured,
    we don't create a fake countdown.
  */

  if (!time) {

    if (timeEl) {

      timeEl.textContent =
        "SHAM KO • TIME TO BE ANNOUNCED";

    }


    if (countdown) {

      countdown.classList.add(
        "no-exact-time"
      );


      countdown.innerHTML = `
        <div class="countdown-message">
          BAPPA AAGMAN • SUNDAY 13 SEPTEMBER • SHAM KO
        </div>
      `;

    }

    return;

  }


  const target =
    new Date(`${date}T${time}:00`);


  const tick = () => {

    const diff =
      target - new Date();


    if (diff <= 0) {

      if (countdown) {

        countdown.innerHTML = `
          <div class="countdown-message">
            BAPPA HAS ARRIVED 🙏
          </div>
        `;

      }

      return;

    }


    let remaining = diff;


    const days =
      Math.floor(
        remaining / 86400000
      );

    remaining %= 86400000;


    const hours =
      Math.floor(
        remaining / 3600000
      );

    remaining %= 3600000;


    const minutes =
      Math.floor(
        remaining / 60000
      );

    remaining %= 60000;


    const seconds =
      Math.floor(
        remaining / 1000
      );


    const dayEl =
      $("#countDays");

    const hourEl =
      $("#countHours");

    const minuteEl =
      $("#countMinutes");

    const secondEl =
      $("#countSeconds");


    if (dayEl) {
      dayEl.textContent =
        String(days).padStart(2, "0");
    }

    if (hourEl) {
      hourEl.textContent =
        String(hours).padStart(2, "0");
    }

    if (minuteEl) {
      minuteEl.textContent =
        String(minutes).padStart(2, "0");
    }

    if (secondEl) {
      secondEl.textContent =
        String(seconds).padStart(2, "0");
    }

  };


  tick();

  setInterval(
    tick,
    1000
  );

}


/* =========================================================
   17. NAVIGATION / HAMBURGER MENU
   ========================================================= */

function setupNav() {

  const header =
    $("#siteHeader");

  const toggle =
    $("#menuToggle");

  const menu =
    $("#siteMenu");

  const close =
    $("#menuClose");

  const backdrop =
    $("#menuBackdrop");


  if (
    !header ||
    !toggle ||
    !menu
  ) return;


  const setMenu =
    open => {

      menu.classList.toggle(
        "open",
        open
      );


      if (backdrop) {

        backdrop.classList.toggle(
          "open",
          open
        );

      }


      document.body.classList.toggle(
        "menu-open",
        open
      );


      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );


      toggle.setAttribute(
        "aria-label",
        open
          ? "Close navigation menu"
          : "Open navigation menu"
      );


      menu.setAttribute(
        "aria-hidden",
        String(!open)
      );

    };


  /*
    Header shadow when scrolling.
  */

  const updateHeader =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 20
      );

    };


  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );


  updateHeader();


  /*
    Hamburger open.
  */

  toggle.addEventListener(
    "click",
    () => {

      const open =
        !menu.classList.contains("open");

      setMenu(open);

    }
  );


  /*
    X close.
  */

  if (close) {

    close.addEventListener(
      "click",
      () => setMenu(false)
    );

  }


  /*
    Click dark overlay to close.
  */

  if (backdrop) {

    backdrop.addEventListener(
      "click",
      () => setMenu(false)
    );

  }


  /*
    Clicking any navigation item
    automatically closes the menu.
  */

  menu.addEventListener(
    "click",
    event => {

      const link =
        event.target.closest("a");

      if (!link) return;

      setMenu(false);

    }
  );


  /*
    Escape key.
  */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        menu.classList.contains("open")
      ) {

        setMenu(false);

        toggle.focus();

      }

    }
  );


  /*
    When screen becomes desktop,
    close mobile drawer.
  */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 800 &&
        menu.classList.contains("open")
      ) {

        setMenu(false);

      }

    }
  );


  setMenu(false);

}


/* =========================================================
   18. SCROLL REVEAL
   ========================================================= */

let revealObserver = null;


function observeReveals() {

  const elements =
    $$(".reveal");


  if (!elements.length) return;


  /*
    If browser doesn't support
    IntersectionObserver, simply
    show everything.
  */

  if (!("IntersectionObserver" in window)) {

    elements.forEach(
      element =>
        element.classList.add("visible")
    );

    return;

  }


  if (!revealObserver) {

    revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add(
              "visible"
            );

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: .08
        }
      );

  }


  elements.forEach(element => {

    if (
      !element.classList.contains("visible")
    ) {

      revealObserver.observe(
        element
      );

    }

  });

}


/* =========================================================
   19. LIGHTBOX
   ========================================================= */

let currentMemoryIndex = 0;


function openMemory(index) {

  if (
    index < 0 ||
    index >= MEMORIES.length
  ) return;


  currentMemoryIndex = index;


  const lightbox =
    $("#memoryLightbox");

  const media =
    $("#lightboxMedia");

  const title =
    $("#lightboxTitle");

  const text =
    $("#lightboxText");


  if (
    !lightbox ||
    !media
  ) return;


  const memory =
    MEMORIES[index];


  media.innerHTML = "";


  if (
    memory.media &&
    memory.type === "video"
  ) {

    const video =
      document.createElement("video");

    video.src =
      memory.media;

    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";

    /*
      No autoplay.
      This prevents unexpected sound.
    */

    media.appendChild(video);

  }

  else if (
    memory.media &&
    memory.type === "photo"
  ) {

    const image =
      document.createElement("img");

    image.src =
      memory.media;

    image.alt =
      memory.title || "Memory";

    media.appendChild(image);

  }

  else {

    media.innerHTML =
      placeholderHTML(
        memory.type === "video"
          ? "REEL"
          : "MEMORY"
      );

  }


  if (title) {

    title.textContent =
      memory.title || "";

  }


  if (text) {

    text.textContent =
      memory.caption || "";

  }


  lightbox.hidden = false;

  lightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "menu-open"
  );

}


function closeMemory() {

  const lightbox =
    $("#memoryLightbox");

  if (!lightbox) return;


  const media =
    $("#lightboxMedia");

  if (media) {
    media.innerHTML = "";
  }


  lightbox.hidden = true;

  lightbox.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "menu-open"
  );

}


function stepMemory(direction) {

  if (!MEMORIES.length) return;


  let next =
    currentMemoryIndex + direction;


  if (next < 0) {
    next = MEMORIES.length - 1;
  }


  if (next >= MEMORIES.length) {
    next = 0;
  }


  openMemory(next);

}


function setupLightbox() {

  const lightbox =
    $("#memoryLightbox");

  if (!lightbox) return;


  const closeButton =
    $("#lightboxClose");

  const prev =
    $("#lightboxPrev");

  const next =
    $("#lightboxNext");


  closeButton?.addEventListener(
    "click",
    closeMemory
  );


  prev?.addEventListener(
    "click",
    () => stepMemory(-1)
  );


  next?.addEventListener(
    "click",
    () => stepMemory(1)
  );


  lightbox.addEventListener(
    "click",
    event => {

      if (
        event.target === lightbox
      ) {

        closeMemory();

      }

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (lightbox.hidden) return;


      if (event.key === "Escape") {

        closeMemory();

      }


      if (event.key === "ArrowLeft") {

        stepMemory(-1);

      }


      if (event.key === "ArrowRight") {

        stepMemory(1);

      }

    }
  );

}


/* =========================================================
   20. AUCTION
   ========================================================= */

function setupAuction() {

  const section =
    $("#auction");

  if (!section) return;


  if (!AUCTION_CONFIG.enabled) {

    section.hidden = true;

    return;

  }


  section.hidden = false;


  const title =
    $("#auctionTitle");

  const description =
    $("#auctionDescription");

  const startingBid =
    $("#auctionStartingBid");

  const currentBid =
    $("#auctionCurrentBid");


  if (title) {

    title.textContent =
      AUCTION_CONFIG.title;

  }


  if (description) {

    description.textContent =
      AUCTION_CONFIG.description;

  }


  if (startingBid) {

    startingBid.textContent =
      `₹${Number(
        AUCTION_CONFIG.startingBid
      ).toLocaleString("en-IN")}`;

  }


  if (currentBid) {

    currentBid.textContent =
      `₹${Number(
        AUCTION_CONFIG.currentBid
      ).toLocaleString("en-IN")}`;

  }

}


/* =========================================================
   21. UPI DONATION
   ========================================================= */

function upiIntent(amount) {

  const params =
    new URLSearchParams({

      pa: DONATION_CONFIG.upiId,

      pn: DONATION_CONFIG.merchantName,

      am: String(amount),

      cu: "INR",

      tn: "Ganesh Utsav 2026 Donation"

    });


  return `upi://pay?${params.toString()}`;

}


/* =========================================================
   22. AUTOMATIC QR
   ========================================================= */

function renderQr(text) {

  const root =
    $("#qrCode");

  if (!root) return;


  root.innerHTML = "";


  if (!text) {

    root.innerHTML = `
      <div class="qr-empty">
        ADD UPI ID
        <br>
        <small>
          QR will appear automatically
        </small>
      </div>
    `;

    return;

  }


  /*
    QRCode.js is loaded only when
    donation is enabled.
  */

  if (window.QRCode) {

    new QRCode(
      root,
      {
        text: text,
        width: 170,
        height: 170,
        correctLevel:
          QRCode.CorrectLevel.M
      }
    );

  } else {

    root.innerHTML = `
      <div class="qr-empty">
        GENERATING QR…
      </div>
    `;

  }

}


/* =========================================================
   23. DONATION SETUP
   ========================================================= */

function setupDonation() {

  const section =
    $("#donation");


  if (!section) return;


  if (!DONATION_CONFIG.enabled) {

    section.hidden = true;

    return;

  }


  section.hidden = false;


  const merchantName =
    $("#merchantName");

  const upiDisplay =
    $("#upiDisplay");


  if (merchantName) {

    merchantName.textContent =
      DONATION_CONFIG.merchantName;

  }


  if (upiDisplay) {

    upiDisplay.textContent =
      DONATION_CONFIG.upiId ||
      "Add UPI ID in script.js";

  }


  let amount = 100;


  const customWrap =
    $("#customAmountWrap");

  const custom =
    $("#customAmount");

  const upiButton =
    $("#upiButton");


  const refresh =
    () => {

      const customValue =
        Number(
          custom?.value
        );


      const selected =
        amount === "custom"
          ? customValue
          : Number(amount);


      const valid =
        Number.isFinite(selected) &&
        selected > 0 &&
        Boolean(DONATION_CONFIG.upiId);


      if (valid) {

        /*
          This is the important part:
          Every amount change creates a
          NEW UPI URL and a NEW QR.
        */

        const link =
          upiIntent(selected);


        if (upiButton) {

          upiButton.href = link;

        }


        renderQr(link);

      } else {

        if (upiButton) {

          upiButton.href = "#";

        }


        renderQr("");

      }

    };


  const amountRoot =
    $("#amounts");


  if (amountRoot) {

    amountRoot.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest("button");


        if (!button) return;


        $$("#amounts button")
          .forEach(
            btn =>
              btn.classList.remove("active")
          );


        button.classList.add("active");


        amount =
          button.dataset.amount;


        if (customWrap) {

          customWrap.hidden =
            amount !== "custom";

        }


        if (
          amount === "custom" &&
          custom
        ) {

          custom.focus();

        }


        refresh();

      }
    );

  }


  custom?.addEventListener(
    "input",
    refresh
  );


  refresh();

}


/* =========================================================
   24. LOAD QR LIBRARY ONLY WHEN NEEDED
   ========================================================= */

function loadQrLibrary() {

  if (!DONATION_CONFIG.enabled) {
    return;
  }


  /*
    If already loaded, don't load again.
  */

  if (window.QRCode) {

    setupDonation();

    return;

  }


  const script =
    document.createElement("script");


  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";


  script.async = true;


  script.onload =
    () => {

      setupDonation();

    };


  script.onerror =
    () => {

      setupDonation();

    };


  document.head.appendChild(
    script
  );

}


/* =========================================================
   25. INITIALIZE EVERYTHING
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupConfig();

    renderDaily();

    renderUpNext();

    renderMemories();

    setupMemoryFilters();

    renderPeople();

    renderEvents();

    setupCountdown();

    setupNav();

    setupLightbox();

    setupAuction();

    observeReveals();

    /*
      Donation is intentionally loaded
      only if enabled.
    */

    if (DONATION_CONFIG.enabled) {

      loadQrLibrary();

    } else {

      setupDonation();

    }

  }
);