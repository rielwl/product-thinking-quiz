# Build What Matters — a product thinking quiz

A small, self-contained quiz on product thinking, themed on the Institute of
Digital Government's **Basic Product Thinking** learning pathway
(<https://www.idg.gov.sg/learning-pathways/>).

Ten scored questions on product thinking. Each answer is marked right or wrong
the moment you submit it, with a short explanation, and it locks so you can't
quietly change your mind.

The quiz also supports unscored, lighthearted questions that introduce whoever
made it — set `track: "creator"` on a question and it is reported separately
from the score instead of counting towards it. There are none in the list at
the moment.

Plain HTML, CSS and JavaScript. No framework, no build step, no backend, no
accounts, and nothing is saved anywhere — refreshing the page starts you over.

## Opening it

Double-click `index.html`. That's the whole setup; it runs straight from the
file system in any current browser.

If you'd rather serve it over HTTP (for example to test on your phone over the
local network), run one of these from this folder:

```
npx serve .
python -m http.server 8000
```

then open the address it prints.

## Files

| File | What's in it |
| --- | --- |
| `index.html` | Page structure: the start, question and results screens |
| `app.js` | **All quiz content**, then the logic that runs the quiz |
| `styles.css` | The visual design |

## Editing the questions

Everything you'd want to change lives in the two marked blocks at the top of
`app.js`. You don't need to touch anything below the `PLUMBING` divider.

### 1. Your name

```js
const CREATOR = {
  name: "your name here",
};
```

### 2. The questions

`QUESTIONS` is a plain array, read in order. Each entry looks like this:

```js
{
  track: "product",          // "product" is scored; "creator" is just for fun
  tag: "Problem framing",    // the small label above the question
  options: [ "…", "…", "…", "…" ],
  answer: 1,                 // index of the correct option — 0 is the first
  explanation: "…",          // shown after the answer is submitted
}
```

A few things worth knowing:

- **`answer` counts from zero.** `answer: 0` marks the first option correct.
- **The score adapts.** It is calculated from however many `track: "product"`
  questions exist, so the results screen stays correct if you add or remove
  some. Only `product` questions count towards the score; `creator` ones are
  reported separately.
- **Four options is the sweet spot**, but any number works. The number-key
  shortcuts follow the list length automatically.
- **Order on screen is array order.** Move a question by moving its block.
- To reword the results messages, edit `BANDS` further down — each band has a
  `min` score ratio, a `headline` and a `summary`.

## Assumptions worth flagging

Two things here are my best reading rather than course material, so check them
against your own notes before using this with anyone else:

1. **The question content is not taken from the IDG course.** The course itself
   (*Build What Matters: Product Thinking for Government*) sits behind a login on
   learn.gov.sg, so I couldn't read it. The ten questions are built from the
   public description of the Basic Product Thinking pathway — "uncover user
   needs, define meaningful outcomes, and avoid jumping straight to solutions" —
   together with broadly accepted product thinking ideas: problem framing,
   talking to users, whose problem a change actually serves, outcomes versus
   outputs, agreeing a measure before launch, testing the riskiest assumption,
   what a first version is for, and how to prioritise. One question covers where
   Basic Product Thinking sits relative to AI Aware 101, AI Apply 201 and
   AI Build 301.

2. **`CREATOR.name` is an unfilled placeholder.** It is only read by
   `track: "creator"` questions, so it has no effect while there are none —
   set it in `app.js` if you add some.

## Accessibility

- Real radio inputs, so arrow keys move between options and screen readers
  announce them as a group.
- <kbd>1</kbd>–<kbd>4</kbd> select an option, <kbd>Enter</kbd> submits and moves on.
- Focus moves to the question text on each new question, and every interactive
  element has a visible amber focus ring.
- Correct and incorrect are marked with colour *and* wording, never colour alone.
- Feedback is announced to screen readers through a live region.
- Animations are dropped for anyone with "reduce motion" turned on.

Tested end to end in Chrome at 1280px and 390px wide.
