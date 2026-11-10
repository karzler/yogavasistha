# योगवासिष्ठ — Yoga Vasiṣṭha

The Yoga Vasiṣṭha studied verse by verse: Sanskrit, word-by-word meaning in prose order, English translation, and pointers for reflection.

**Read it online:** https://yogavasistha.bhaktology.com/

## How this repository is organised

```
docs/
  index.md                 home page
  introduction/            why I love Yoga Vasistha, about this translation
  glossary.md              key terms, rendered consistently
  1-vairagya/ … 6-nirvana/ one folder per prakaraṇa
    index.md               overview of the prakaraṇa
    sarga-001.md           one file per sarga, every verse inside it
templates/sarga-template.md  copy this to start a new sarga
mkdocs.yml                 site title and navigation
```

## Adding a new sarga

1. Copy `templates/sarga-template.md` to the prakaraṇa's folder, e.g. `docs/1-vairagya/sarga-002.md`.
2. Fill in the verses. Give each verse heading an id like `{ #1-2-5 }` so it can be linked.
3. Add the sarga to `nav:` in `mkdocs.yml` and to the list on the prakaraṇa's `index.md`.
4. Commit. The site rebuilds itself in about a minute.

## Previewing on your own computer (optional)

```
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## License

The Sanskrit text is in the public domain. The word meanings, translations and commentary are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
