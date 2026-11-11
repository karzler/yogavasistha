# योगवासिष्ठ — Yoga Vasiṣṭha

**The Yoga Vasiṣṭha studied verse by verse: the Sanskrit text, word-by-word meanings, an English translation, and pointers for reflection.**

**Read it online:** https://yogavasistha.bhaktology.com/

---

## What is the Yoga Vasiṣṭha?

The Yoga Vasiṣṭha is a dialogue between the sage Vasiṣṭha and the young prince Śrī Rāma. Troubled by the suffering and impermanence of life, Śrī Rāma asks his teacher what is real and how one should live. Vasiṣṭha answers through philosophy and through many stories.

Traditionally attributed to Vālmīki, the full text has about 32,000 verses in six books, called prakaraṇas. Its central teaching is that the world is an appearance in consciousness, and that liberation is possible while living fully in the world.

It is also a great synthesis. At its core is Advaita Vedānta, the Upaniṣadic teaching that one consciousness appears as many. Around that core it gathers ideas from Buddhism, Jainism, Kashmir Śaivism, Sāṅkhya and Yoga, and the Bhagavad Gītā, treating them not as rivals but as different names for one truth.

Four features set it apart:

1. **The Lord as student.** In the Bhagavad Gītā the Lord is the Guru, teaching Arjuna. In the Yoga Vasiṣṭha the Lord is the student: Śrī Rāma sits before Vasiṣṭha to learn.
2. **Questions worth asking.** Śrī Rāma, still a teenager, asks the questions that matter most — about suffering, time, the mind and the meaning of life. The text teaches how to ask before it teaches the answers.
3. **A synthesis.** Advaita Vedānta at its core, with insights from Jainism, Buddhism and Kashmir Śaivism woven into one whole.
4. **Wisdom lived, not renounced.** Having awakened, Śrī Rāma goes on to live a full householder life: liberation in the midst of duty and the world.

## What the site offers

Every verse is presented in four parts:

1. **The Sanskrit verse** in Devanagari, with its reference (Prakaraṇa.Sarga.Verse, e.g. 1.2.5).
2. **Word by word** — the words in prose order (anvaya), each with its meaning.
3. **Translation** — a plain English rendering made directly from the Sanskrit.
4. **Pointers for Reflection** — key words, links to other verses, and parallels in the Bhagavad Gītā and the Upaniṣads, with Buddhist and Jaina teachings (such as Śāntideva's *Bodhicaryāvatāra*) where they shed light. They open doors for reflection; they are not a finished commentary.

Each sarga opens with a short outline, a [glossary](https://yogavasistha.bhaktology.com/glossary/) keeps key terms consistent, everything is searchable, and every verse has its own link with **Share this verse** and **Copy link** buttons.

### Progress

| Prakaraṇa | Status |
| --- | --- |
| 1. Vairāgya (Dispassion) | Complete — 33 sargas |
| 2. Mumukṣu (The Seeker) | Complete — 20 sargas |
| 3. Utpatti (Origination) | In progress — 1 of 122 sargas |
| 4. Sthiti (Existence) | Not yet started |
| 5. Upaśama (Quiescence) | Not yet started |
| 6. Nirvāṇa (Liberation) | Not yet started |

## Purpose

The Yoga Vasiṣṭha is one of the great works of Indian thought, yet it is far less read than the Bhagavad Gītā. Complete translations are old and hard to find; well-known modern versions are abridgements that do not show the Sanskrit. This project exists so that anyone, anywhere, can study the text itself, verse by verse, freely:

- **Keep the Sanskrit in view**, so the translation can be checked word by word.
- **Read the text as scripture**, beside the Gītā and the Upaniṣads.
- **Invite reflection, not replace it.**
- **Make every verse reachable** — linkable, searchable and shareable.
- **Stay open** — freely licensed, to be shared, quoted, corrected and built upon.

**How it is made.** The word meanings, translations and pointers are drafted from the Sanskrit with AI assistance and reviewed for accuracy. Mistakes are still possible, especially in long compounds — which is why contributions are welcome.

---

## How to contribute

Corrections and suggestions are very welcome, whether you read Sanskrit fluently or have simply spotted a typo.

### Report a mistake or suggest an improvement (no coding needed)

[Open an issue](https://github.com/karzler/yogavasistha/issues/new) and include:

- **the verse reference**, e.g. `2.9.30` (or paste the verse's link from the site — use the **Copy link** button);
- **what is wrong** — a misprint in the Sanskrit, a wrong word meaning, an inaccurate translation, a broken link, a misquoted parallel;
- **your suggested fix**, and if possible a source (a printed edition, a dictionary, a commentary).

Good things to report: Sanskrit misprints and doubtful readings, missing verses (five verses of the Mumukṣu Prakaraṇa are marked missing — 2.8.6, 2.13.15, 2.18.16, 2.18.46, 2.18.52 — and two of the Vairāgya Prakaraṇa — 1.21.6, 1.31.22), translation errors, and unclear pointers.

### Propose a change directly (pull request)

The quickest way is from the site itself: every page has an **edit** (pencil) icon at the top right, which opens that page's file on GitHub. Make your change, and GitHub will guide you through creating a fork and a pull request.

To work on your own computer:

1. Fork this repository and create a branch for your change.
2. Edit the Markdown file for the sarga under `docs/` (see the layout below).
3. Preview the site locally (see below) and check that it builds without warnings:
   ```
   mkdocs build --strict
   ```
4. Open a pull request describing what you changed and why, citing your source for any change to the Sanskrit.

Please keep pull requests small and focused — one sarga or one kind of fix at a time makes review easy.

### Style guide for contributions

- **Verse format.** Follow the existing pages (and `templates/sarga-template.md`): Sanskrit in `<p class="shloka">`, word-by-word in `<p class="anvaya">` with Devanagari words followed by their meanings in brackets, then **Translation:** and **Pointers for Reflection:**.
- **Verse ids.** Every verse heading carries an id like `{ #2-9-30 }` (prakaraṇa-sarga-verse) so it can be linked. Do not change existing ids — people may have shared them.
- **Translations** are made from the Sanskrit, not copied from other translations.
- **Sanskrit corrections** are made in the verse itself, with a **Reading note** in the pointers saying what the source printed and what it was corrected to. If a reading is only doubtful, leave it and flag it.
- **Quotations** from the Gītā, Upaniṣads or other texts are given in the original (Devanagari, or Pāli/Prakrit in italics) with an English rendering and an exact reference.
- **Voice.** Write impersonally — the commentary speaks about the text, not about the writer. Treat the text as scripture. Write "Śrī Rāma" in English prose.
- **Glossary.** If you introduce a new key term, add it to `docs/glossary.md` in Devanagari alphabetical order, linked to its first occurrence.

---

## How this repository is organised

```
docs/
  index.md                 home page
  glossary.md              key terms, rendered consistently
  assets/                  stylesheet and the share-button script
  1-vairagya/ … 6-nirvana/ one folder per prakaraṇa
    index.md               overview of the prakaraṇa and list of its sargas
    sarga-001.md           one file per sarga, every verse inside it
templates/sarga-template.md  starting point for a new sarga
mkdocs.yml                 site settings and navigation
requirements.txt           Python packages needed to build the site
```

### Adding a new sarga

1. Copy `templates/sarga-template.md` into the prakaraṇa's folder, e.g. `docs/3-utpatti/sarga-001.md`.
2. Fill in the verses, giving each verse heading an id like `{ #3-1-5 }`.
3. Add the sarga to `nav:` in `mkdocs.yml` and to the list on the prakaraṇa's `index.md`.
4. Commit. The site rebuilds and redeploys automatically in about a minute.

### Previewing on your own computer

```
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000. The site is built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

---

## License

The Sanskrit text is in the public domain. The word meanings, translations and commentary are licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/): you may share and adapt them, with credit, under the same license. See [LICENSE.md](LICENSE.md).
