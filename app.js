/* =====================================================================
   Build What Matters — a product thinking quiz
   ---------------------------------------------------------------------
   ALL QUIZ CONTENT LIVES IN THE TWO BLOCKS BELOW.
   Edit CREATOR and QUESTIONS; the rest of the file is just plumbing.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. THE QUIZ CREATOR
   Only used by questions marked `track: "creator"` — the unscored,
   lighthearted ones that introduce you. There are none in the list at the
   moment; add some and they'll be reported separately from the score.
   --------------------------------------------------------------------- */
const CREATOR = {
  name: "your name here",
};

/* ---------------------------------------------------------------------
   2. THE QUESTIONS
   track:       "product" (scored) or "creator" (just for fun)
   tag:         small label shown above the question
   options:     any number of choices; 4 works best
   answer:      index of the correct option, starting at 0
   explanation: shown once the answer is submitted
   --------------------------------------------------------------------- */
const QUESTIONS = [
  /* --- the product thinking ten ------------------------------------- */
  {
    track: "product",
    tag: "What it is",
    question:
      "A colleague opens a meeting with “We need a chatbot for our enquiry line.” What does a product thinking approach do first?",
    options: [
      "Scope the chatbot and get a build estimate",
      "Look at what other agencies' chatbots do",
      "Find out what people are actually enquiring about, and why today's process fails them",
      "Secure the budget before anyone changes their mind",
    ],
    answer: 2,
    explanation:
      "A chatbot is a solution somebody has already picked. Product thinking steps back to the problem: who is stuck, on what, and how often. Sometimes the answer really is a chatbot — but now you would know why.",
  },
  {
    track: "product",
    tag: "Problem framing",
    question: "Which of these is a problem statement rather than a solution in disguise?",
    options: [
      "Build a mobile app for permit renewals",
      "Applicants miss renewal deadlines because the reminder arrives after the window has closed",
      "Add SMS notifications to the renewal system",
      "Move the renewal form onto the new platform",
    ],
    answer: 1,
    explanation:
      "Only one of these describes something happening to a person, and why. The other three name a build. A good problem statement leaves the solution genuinely open.",
  },
  {
    track: "product",
    tag: "User needs",
    question: "You have an hour with four real users. What is the most useful way to spend it?",
    options: [
      "Ask them to walk you through how they handle the task today, step by step",
      "Show them your planned features and ask which they would like most",
      "Ask their managers what the team needs",
      "Work through a survey of yes/no questions",
    ],
    answer: 0,
    explanation:
      "People are excellent witnesses to their own past behaviour and unreliable predictors of their future behaviour. Asking about a feature list also quietly assumes your solution is already the right one.",
  },
  {
    track: "product",
    tag: "Whose problem",
    question:
      "Officers want a new mandatory field because it would save them chasing people for it later. Applicants already find the form long. Whose problem is the new field solving?",
    options: [
      "The applicant's, because a complete form gets processed faster",
      "Nobody's — mandatory fields are always bad",
      "The office's, and it is worth naming that honestly before deciding",
      "Both equally, so there is nothing to weigh up",
    ],
    answer: 2,
    explanation:
      "Internal convenience is a real need and sometimes the right call. The trap is dressing it up as a user need, because then nobody weighs the cost you are pushing onto applicants.",
  },
  {
    track: "product",
    tag: "Outcomes",
    question: "Which of these is an outcome rather than an output?",
    options: [
      "Shipped the release on schedule",
      "Published a new FAQ page",
      "Added twelve fields to the form",
      "Median time to complete an application fell from 40 minutes to 12",
    ],
    answer: 3,
    explanation:
      "Outputs are things you produced. Outcomes are changes in what people can do, or how well they can do it. You can hit every output on the plan and still change nothing.",
  },
  {
    track: "product",
    tag: "Measuring",
    question: "You launch the improved renewal flow. What tells you whether it actually worked?",
    options: [
      "A measure agreed before launch and tied to the problem, such as the share of renewals completed on time",
      "Warm feedback from the launch demo",
      "The number of people who visited the new page",
      "That the project closed without major incidents",
    ],
    answer: 0,
    explanation:
      "Decide what success looks like before you build, or you will go looking afterwards for a number that flatters you. Visits measure traffic, not whether anybody got their renewal in on time.",
  },
  {
    track: "product",
    tag: "Assumptions",
    question: "Your team lists ten assumptions behind an idea. Which should you test first?",
    options: [
      "The cheapest one to test",
      "The one you feel most confident about",
      "The one that, if it turns out to be wrong, makes the whole idea collapse",
      "The one leadership asked about in the last review",
    ],
    answer: 2,
    explanation:
      "Test the riskiest assumption first. If it fails you have saved months; if it holds, everything after it is worth doing. Cheap tests are lovely, but only when they answer a question that matters.",
  },
  {
    track: "product",
    tag: "Validating",
    question: "What is a deliberately small first version actually for?",
    options: [
      "Shipping something cheap so the team can move on to the next thing",
      "Learning whether the problem and your approach are real, before spending more",
      "Showing management visible progress this quarter",
      "Delivering a polished product that simply has fewer features",
    ],
    answer: 1,
    explanation:
      "The point is the learning, not the thrift. A first version that teaches you nothing is not minimal — it is just unfinished.",
  },
  {
    track: "product",
    tag: "Prioritising",
    question:
      "Requests are piling up from three divisions at once. What is the product thinking basis for choosing?",
    options: [
      "First come, first served — it is the fairest",
      "Whatever is quickest to build, to clear the backlog",
      "Whichever division is most senior",
      "The size of the user problem, and the outcome that solving it would move",
    ],
    answer: 3,
    explanation:
      "Queue order, ease and seniority are all real pressures, but none of them is evidence. Prioritising by problem size and expected outcome is what stops a team becoming a feature factory.",
  },
  {
    track: "product",
    tag: "The IDG pathway",
    question:
      "On IDG's learning pathways, where does Basic Product Thinking sit relative to AI Aware 101, AI Apply 201 and AI Build 301?",
    options: [
      "After AI Build 301, once you can already build things",
      "First — identify the right problem before learning to solve it with AI",
      "As an alternative track for people who would rather not use AI",
      "Alongside AI Apply 201, and only for product managers",
    ],
    answer: 1,
    explanation:
      "IDG puts it plainly: before learning to solve problems with AI, learn how to identify the right ones. Product thinking is the groundwork the AI pathways build on.",
  },

];

/* =====================================================================
   PLUMBING — you shouldn't need to edit below here.
   ===================================================================== */

const $ = (id) => document.getElementById(id);

const el = {
  screens: {
    start: $("screen-start"),
    quiz: $("screen-quiz"),
    results: $("screen-results"),
  },
  tag: $("q-tag"),
  num: $("q-num"),
  bar: $("q-bar"),
  barFill: $("q-bar-fill"),
  text: $("q-text"),
  options: $("q-options"),
  feedback: $("q-feedback"),
  live: $("q-live"),
  form: $("q-form"),
  back: $("btn-back"),
  submit: $("btn-submit"),
  next: $("btn-next"),
};

const PRODUCT_TOTAL = QUESTIONS.filter((q) => q.track === "product").length;

// answers[i] = chosen option index, or null if not yet answered
let answers = new Array(QUESTIONS.length).fill(null);
let current = 0;

function show(name) {
  Object.entries(el.screens).forEach(([key, node]) => {
    node.hidden = key !== name;
  });
}

/* ---------- rendering ---------- */
function renderQuestion() {
  const q = QUESTIONS[current];
  const chosen = answers[current];
  const locked = chosen !== null;

  el.tag.textContent = q.tag;
  el.tag.classList.toggle("tag--fun", q.track === "creator");
  el.num.textContent = current + 1;
  el.text.textContent = q.question;

  const pct = Math.round(((current + 1) / QUESTIONS.length) * 100);
  el.barFill.style.width = pct + "%";
  el.bar.setAttribute("aria-valuenow", String(pct));

  el.options.innerHTML = "";
  q.options.forEach((optionText, i) => {
    const id = "opt-" + current + "-" + i;

    const label = document.createElement("label");
    label.className = "option";
    label.htmlFor = id;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "q" + current;
    input.id = id;
    input.value = String(i);
    input.checked = chosen === i;
    input.disabled = locked;

    const key = document.createElement("span");
    key.className = "option__key";
    key.textContent = String(i + 1);

    const body = document.createElement("span");
    body.className = "option__text";
    body.textContent = optionText;

    label.append(input, key, body);

    if (locked) {
      label.classList.add("is-locked");
      if (i === q.answer) label.classList.add("is-correct");
      if (i === chosen && chosen !== q.answer) label.classList.add("is-wrong");
    }

    el.options.appendChild(label);
  });

  if (locked) {
    const right = chosen === q.answer;
    el.feedback.hidden = false;
    el.feedback.className = "feedback " + (right ? "is-right" : "is-off");
    el.feedback.innerHTML = "";

    const head = document.createElement("p");
    head.className = "feedback__head";
    if (right) {
      head.textContent = q.track === "creator" ? "Got it." : "Correct.";
    } else {
      head.textContent =
        q.track === "creator" ? "Not quite — nothing lost." : "Not this time.";
    }

    const why = document.createElement("p");
    why.className = "feedback__why";
    why.textContent = q.explanation;

    el.feedback.append(head, why);
  } else {
    el.feedback.hidden = true;
    el.feedback.innerHTML = "";
  }

  el.back.disabled = current === 0;
  el.submit.hidden = locked;
  el.next.hidden = !locked;
  el.next.textContent = current === QUESTIONS.length - 1 ? "See results" : "Next";

  el.text.focus();
}

/* ---------- actions ---------- */
function submitAnswer(event) {
  event.preventDefault();
  if (answers[current] !== null) return;

  const picked = el.options.querySelector("input:checked");
  if (!picked) {
    el.live.textContent = "Choose an answer first.";
    el.options.classList.remove("nudge");
    void el.options.offsetWidth; // restart the animation
    el.options.classList.add("nudge");
    return;
  }

  const q = QUESTIONS[current];
  const choice = Number(picked.value);
  answers[current] = choice;

  el.live.textContent =
    (choice === q.answer ? "Correct. " : "Incorrect. ") + q.explanation;

  renderQuestion();
  el.next.focus();
}

function goNext() {
  if (current === QUESTIONS.length - 1) {
    renderResults();
    show("results");
    $("r-headline").focus();
    return;
  }
  current += 1;
  renderQuestion();
}

function goBack() {
  if (current === 0) return;
  current -= 1;
  renderQuestion();
}

/* ---------- results ---------- */
const BANDS = [
  {
    min: 1,
    headline: "You framed every single one.",
    summary:
      "A clean sweep. You consistently stepped back to the problem instead of reaching for the nearest solution, which is the whole game. Go and be the person in the room who asks what we are actually solving.",
  },
  {
    min: 0.75,
    headline: "Strong product instincts.",
    summary:
      "You have the core of it: problems before solutions, outcomes before output. Look again at the ones you missed — they tend to be exactly the habits that are hardest to hold onto under deadline pressure.",
  },
  {
    min: 0.5,
    headline: "Solid ground to build on.",
    summary:
      "You are already resisting the jump straight to solutions, which is the hardest part to learn. Most of what tripped you up here is a matter of practice rather than theory.",
  },
  {
    min: 0,
    headline: "A good place to start.",
    summary:
      "Product thinking cuts against a lot of ordinary working habits, so finding this unfamiliar is completely normal. The explanations you just read are the short version of the idea; IDG's Basic Product Thinking pathway is the long one.",
  },
];

function renderResults() {
  const indexed = QUESTIONS.map((q, i) => ({ q, i }));
  const productQs = indexed.filter((x) => x.q.track === "product");
  const funQs = indexed.filter((x) => x.q.track === "creator");

  const score = productQs.filter((x) => answers[x.i] === x.q.answer).length;
  const ratio = PRODUCT_TOTAL ? score / PRODUCT_TOTAL : 0;
  const band = BANDS.find((b) => ratio >= b.min) || BANDS[BANDS.length - 1];

  $("r-score").textContent = String(score);
  $("r-outof").textContent = "/" + PRODUCT_TOTAL;
  $("r-headline").textContent = band.headline;
  $("r-summary").textContent = band.summary;

  // The "creator" questions are optional — say nothing if there aren't any.
  const creatorNote = $("r-creator");
  if (funQs.length === 0) {
    creatorNote.hidden = true;
    creatorNote.textContent = "";
  } else {
    const funScore = funQs.filter((x) => answers[x.i] === x.q.answer).length;
    creatorNote.hidden = false;
    creatorNote.textContent =
      "You also got " + funScore + " of " + funQs.length + " right about " +
      CREATOR.name + " — " +
      (funScore === funQs.length
        ? "either you know them well, or you guess well."
        : "not that those ones counted.");
  }

  const review = $("r-review");
  review.innerHTML = "";
  productQs.forEach(({ q, i }) => {
    const right = answers[i] === q.answer;

    const li = document.createElement("li");
    li.className = "review__item " + (right ? "is-right" : "is-off");

    const mark = document.createElement("span");
    mark.className = "review__mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = right ? "✓" : "✕";

    const sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = right ? "Correct: " : "Incorrect: ";

    const body = document.createElement("div");
    const t = document.createElement("p");
    t.className = "review__q";
    t.textContent = q.tag;
    const a = document.createElement("p");
    a.className = "review__a";
    a.textContent = q.options[q.answer];
    body.append(t, a);

    li.append(mark, sr, body);
    review.appendChild(li);
  });
}

function restart() {
  answers = new Array(QUESTIONS.length).fill(null);
  current = 0;
  show("quiz");
  renderQuestion();
}

/* ---------- keyboard: 1-4 picks an option ---------- */
document.addEventListener("keydown", (e) => {
  if (el.screens.quiz.hidden) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (answers[current] !== null) return;

  const n = Number(e.key);
  if (!Number.isInteger(n) || n < 1 || n > QUESTIONS[current].options.length) return;

  const input = el.options.querySelectorAll("input")[n - 1];
  if (input) {
    input.checked = true;
    input.focus();
    e.preventDefault();
  }
});

/* ---------- wiring ---------- */
$("q-total").textContent = String(QUESTIONS.length);
$("start-count").textContent = String(QUESTIONS.length);

$("btn-start").addEventListener("click", () => {
  show("quiz");
  renderQuestion();
});
el.form.addEventListener("submit", submitAnswer);
el.next.addEventListener("click", goNext);
el.back.addEventListener("click", goBack);
$("btn-restart").addEventListener("click", restart);
