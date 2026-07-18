# chrono.bible

A comprehensive, chronological timeline of redemptive history. It follows Scripture from God’s eternal purpose and creation through the covenants, the person and work of Christ, the apostolic church, and the new creation.

The project is written from a Reformed orthodox perspective, uses the Berean Standard Bible for linked readings, and affirms the doctrine of biblical inerrancy expressed by the Chicago Statement on Biblical Inerrancy.

## Development

Install dependencies:

```sh
pnpm install
```

Start and manage the background development server:

```sh
pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Create a production build:

```sh
pnpm build
```

## Project structure

- `src/data/expanded-timeline.ts` contains the comprehensive redemptive-history timeline.
- `src/data/timeline.ts` contains shared types, Bible links, and the 52-week reading plan.
- `src/components/TimelineEvent.astro` renders timeline cards and mobile artwork stages.
- `src/components/ReadingPlan.astro` renders the chronological reading plan.
- `src/pages/index.astro` contains the page structure, scrolling behavior, and section styling.
- `public/images/` contains cinematic event artwork and sharing assets.

Production site: [chrono.bible](https://chrono.bible)
