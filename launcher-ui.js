document.addEventListener("DOMContentLoaded", () => {
  const downloadTab = document.querySelector('.nav-tabs a[href="https://neofn.dev/creators"]');
  if (downloadTab) {
    downloadTab.href = "https://projectneofn.dev/download";
    downloadTab.textContent = "Download";
  }

  const title = document.querySelector(".stage-word");
  if (title) title.textContent = "Project Neo Launcher";

  const link = document.querySelector(".nav-download");
  if (link) {
    link.classList.add("finder");
    link.setAttribute("aria-label", "Get Launcher");
    link.setAttribute("data-edge", "");
    link.setAttribute("data-edge-on-border", "");
    link.setAttribute("data-edge-stroke", "2");
    link.setAttribute("data-edge-glow", "0.35");
    link.replaceChildren(
      Object.assign(document.createElement("span"), {
        className: "finder-glass neo-glass",
      }),
      Object.assign(document.createElement("span"), {
        className: "nav-download-label",
        textContent: "Get Launcher",
      }),
      Object.assign(document.createElement("span"), {
        className: "finder-go nav-download-go",
        innerHTML: '<img src="./assets/icons/download.svg" alt="">',
      }),
    );
    link.firstElementChild.setAttribute("aria-hidden", "true");
    link.lastElementChild.setAttribute("aria-hidden", "true");
    import("./astro/Layout.astro_astro_type_script_index_1_lang.C7SCjpzP.js")
      .then((layout) => layout.j())
      .catch((error) => console.error("Neo: launcher button edge failed to mount.", error));
  }

  const heroLabel = document.querySelector(".isle-code-label");
  const setDownloadLabel = () => {
    const label = document.querySelector('[data-isle][data-mnemonic="project-neo-launcher"] .isle-code-label');
    if (!label || label.querySelector(".windows-download-icon")) return;
    label.replaceChildren(
      Object.assign(document.createElement("img"), {
        src: "./assets/icons/windows.svg",
        alt: "",
        className: "windows-download-icon",
        width: 18,
        height: 18,
      }),
      document.createTextNode("Download"),
    );
  };
  if (heroLabel) {
    heroLabel.replaceChildren(
      Object.assign(document.createElement("img"), {
        src: "./assets/icons/windows.svg",
        alt: "",
        className: "windows-download-icon",
      }),
      document.createTextNode("Download"),
    );
  }

  const launcherCard = document.querySelector('[data-isle][data-mnemonic="project-neo-launcher"]');
  const cleanLauncherCard = () => {
    const card = document.querySelector('[data-isle][data-mnemonic="project-neo-launcher"]');
    card?.querySelector(".isle-by")?.remove();
    const image = card?.querySelector(".isle-img");
    if (image) {
      image.alt = "Project Neo launcher showing its classic Fortnite season selection screen";
      image.removeAttribute("aria-hidden");
    }
    setDownloadLabel();
  };
  cleanLauncherCard();
  const heroTrack = document.querySelector("[data-rail-track]");
  if (heroTrack) new MutationObserver(cleanLauncherCard).observe(heroTrack, { childList: true, subtree: true });

  const lobbyCopy = document.querySelector('#lobbies-title')?.closest(".chapter")?.querySelectorAll(".chapter-copy > p");
  if (lobbyCopy?.length >= 3) {
    lobbyCopy[0].innerHTML = 'Our <strong>Creative servers run around the clock</strong>, with <strong>hundreds of maps</strong> from our creators ready to explore and play for free.';
    lobbyCopy[1].innerHTML = 'Visit the <strong>Featured Islands rifts</strong> in the Hub and enter a map code to find your next game. Browse the full collection from the top of this page or use the search box.';
    lobbyCopy[2].innerHTML = 'Each Creative lobby supports up to <strong>32 players</strong>, so there is room to join the fun. Find teammates in our Discord community in the <strong>looking for group channel</strong>.';
  }

  const publishCopy = document.querySelector('.chapter[aria-labelledby="publish-title"] .chapter-copy');
  if (publishCopy) {
    const paragraphs = publishCopy.querySelectorAll(":scope > p");
    if (paragraphs[0]) paragraphs[0].innerHTML = 'Project Neo Creative gives creators a place to share their islands with players. Publish your maps and let the community discover and play them.';
    if (paragraphs[1]) paragraphs[1].innerHTML = 'Interested in becoming a <strong>Creative Creator</strong>? Read about eligibility, publishing access, and Crew membership below.';
    const subhead = publishCopy.querySelector(".chapter-subhead");
    if (subhead) subhead.textContent = "How to join the Creative Creator program:";
    const rules = publishCopy.querySelectorAll(".chapter-list > p");
    if (rules[0]) rules[0].innerHTML = 'You need to meet Neo’s <span class="ink-creator">content creator</span> requirements and follow the <a class="ink-link" href="https://discord.gg/neofn" target="_blank" rel="noopener noreferrer">creator rules</a>. Current Neo content creators join the program automatically. Read more about eligibility <a class="ink-link" href="https://discord.gg/neofn" target="_blank" rel="noopener noreferrer">here</a>.';
    if (rules[1]) rules[1].innerHTML = '<span class="ink-crew">Crew</span> and <span class="ink-crewplus">Crew+</span> members can publish maps publicly. Map plays do not provide extra rewards for these memberships. Your rewards come from the benefits included with your subscription.';
  }

  const reviewTitle = document.querySelector("#creators-title");
  if (reviewTitle) reviewTitle.textContent = "Player Reviews";

  const reviewCopy = [
    "Season switching is simple, and the old Fortnite feel is spot on.",
    "A quick way to revisit the seasons I grew up playing.",
    "The launcher is easy to use and gets me into a match fast.",
    "Classic maps and weapons make every session feel familiar.",
    "I like how quickly I can pick a season and start playing.",
    "A smooth return to the Fortnite seasons I remember.",
    "Everything is straightforward, from choosing a season to launching.",
    "The old-school atmosphere is exactly what I was looking for.",
    "It is great having several classic seasons in one place.",
    "Simple setup, quick matches, and plenty of nostalgia.",
    "I can jump in with friends without a complicated setup.",
    "The launcher keeps it easy to get back to classic Fortnite.",
    "A fun way to revisit the maps and gameplay I missed.",
    "Picking a season takes seconds, and then we are playing.",
  ];

  const reviewList = document.querySelector("[data-creators]");
  if (reviewList) {
    const updateReviews = () => {
      reviewList.querySelectorAll("[data-creator]").forEach((card, index) => {
        const name = card.querySelector(".creator-name");
        const face = card.querySelector(".creator-face");
        const copy = card.querySelector(".creator-maps");
        const badge = card.querySelector(".creator-rating span");
        if (name) {
          const label = document.createElement("p");
          label.className = name.className;
          label.textContent = "Neo Player";
          name.replaceWith(label);
        }
        if (face) {
          face.classList.add("creator-face-review");
          face.innerHTML = '<span class="creator-initial">NP</span>';
        }
        if (copy) {
          copy.classList.remove("creator-maps");
          copy.classList.add("creator-review");
          copy.textContent = reviewCopy[index % reviewCopy.length];
        }
        if (badge) badge.textContent = "Player review";
      });
    };

    updateReviews();
    new MutationObserver(updateReviews).observe(reviewList, { childList: true });
  }

  const lobbies = document.querySelector("#lobbies-title")?.closest(".chapter");
  if (lobbies && !document.querySelector("#og-multiplayer-title")) {
    lobbies.insertAdjacentHTML("afterend", `
      <section class="chapter" aria-labelledby="og-multiplayer-title">
        <figure class="float" data-float data-par="-46">
          <img src="./assets/story/og_landscape.webp" alt="Classic Chapter 1 Fortnite island landscape in Project Neo" width="1920" height="1080" loading="lazy" decoding="async">
        </figure>
        <div class="chapter-copy" data-in-group data-par="30">
          <h2 class="chapter-title" id="og-multiplayer-title">OG Fortnite multiplayer</h2>
          <p>Choose from classic Chapter 1 seasons and return to the maps, weapons, and gameplay that made Fortnite memorable. Drop in solo or squad up with friends for the familiar OG multiplayer experience.</p>
          <p>Find full lobbies and get straight into a match, with anti-cheat helping keep the action fair for everyone. Pick your season in the Project Neo launcher and jump back into the island.</p>
          <a class="ink-link" href="https://projectneofn.dev/download" target="_blank" rel="noopener noreferrer">Download Project Neo</a>
        </div>
      </section>
    `);
  }

  const reviewsSection = document.querySelector("#creators-title")?.closest(".creators-block");
  if (reviewsSection && !document.querySelector("#faq-title")) {
    const faqs = [
      ["What is Project Neo?", "Project Neo is a launcher for revisiting classic Fortnite seasons and multiplayer."],
      ["How do I get started?", "Download the launcher for Windows, open it, and follow its setup instructions."],
      ["Which seasons are available?", "The launcher shows the seasons currently available to play."],
      ["Can I play with friends?", "Yes. Join a supported multiplayer session and invite friends to play together."],
      ["Do I need to pay to use Neo?", "Neo is free to download and use."],
      ["Where can I get help?", "Visit the Project Neo Discord community for support and updates."],
    ];
    const section = document.createElement("section");
    section.className = "faq-block";
    section.setAttribute("aria-labelledby", "faq-title");
    section.innerHTML = `
      <h2 class="chapter-title creators-title" id="faq-title">Frequently Asked Questions</h2>
      <ul class="faq-list">${faqs.map(([question, answer], index) => `
        <li class="creator faq-item" data-edge data-edge-inset="0" data-edge-stroke="2" data-edge-glow="0.25">
          <div class="faq-card">
            <button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index + 1}"><span>${question}</span><span class="faq-toggle" aria-hidden="true">+</span></button>
            <div class="faq-answer-wrap" id="faq-answer-${index + 1}" aria-hidden="true" inert><div class="faq-answer-inner"><p class="faq-answer">${answer}</p></div></div>
            <span class="creator-glass neo-glass" aria-hidden="true"></span>
          </div>
        </li>`).join("")}
      </ul>
    `;
    section.querySelectorAll(".faq-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        const button = item.querySelector(".faq-question");
        const expanded = button?.getAttribute("aria-expanded") === "true";
        const current = section.querySelector(".faq-item.is-open");
        if (current && current !== item) {
          current.classList.remove("is-open");
          current.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
          const currentAnswer = current.querySelector(".faq-answer-wrap");
          if (currentAnswer) {
            currentAnswer.setAttribute("aria-hidden", "true");
            currentAnswer.inert = true;
          }
        }

        const opening = !expanded;
        item.classList.toggle("is-open", opening);
        button?.setAttribute("aria-expanded", String(opening));
        const answer = item.querySelector(".faq-answer-wrap");
        if (answer) {
          answer.setAttribute("aria-hidden", String(!opening));
          answer.inert = !opening;
        }
      }, true);
    });
    reviewsSection.after(section);
    import("./astro/Layout.astro_astro_type_script_index_1_lang.C7SCjpzP.js")
      .then((layout) => layout.j())
      .catch((error) => console.error("Neo: FAQ card edges failed to mount.", error));
  }
});
