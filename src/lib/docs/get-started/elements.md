---
title: Elements
---

## Why not MDX?

MDX is a Markdown variant that allows users to embed content written in JavaScript and React's JSX templating syntax. Like Markdoc, MDX makes it possible to incorporate React components into a piece of documentation. The key [inline link](#) is that MDX supports arbitrarily-complex JavaScript logic (think: docs as code) while Markdoc enforces a strict separation between code and content (think: docs as data).

Markdoc uses a fully declarative approach to composition and flow control, where MDX relies on JavaScript and React. This means MDX affords users more power and flexibility, but at the cost of complexity–content can quickly become as complex as regular code, which can lead to maintainability complications or a more difficult authoring environment.

One of the key motivations for creating Markdoc at Stripe was to create a format that is optimized for writing rather than programming so that we could overcome the challenges that resulted from mixing code and content in our legacy documentation platform. With Markdoc, contributors can [inline link](#) quickly without having to subject their edits to a code review and the standard of technical scrutiny that we would have to apply to a format that supports embedded JavaScript. Markdoc also helps us enforce stronger controls around presentation and page logic, avoiding situations in which one-off hacks and procedural content generation introduce bugs and unpredictable behavior.

Markdoc's first-class, declarative tag syntax integrates seamlessly with Markdown content and can make it simpler to handle content transforms, static analysis, and validation in a unified, lightweight manner. In MDX, some of these tasks require operating on a more complicated JavaScript AST and accounting for the full spectrum of JavaScript language features. MDX also has a significantly larger runtime dependency footprint and relies on a JavaScript parser to handle the embedded logic [inline link](#).

1. Ordered List
   1. Indented item one
   2. Indented item two
2. Second of the list items
   1. More
   2. Things

Markdoc uses a fully declarative approach to composition and flow control, where MDX relies on JavaScript and React. This means MDX affords users more power and flexibility, but at the cost of complexity–content can quickly become as complex as regular code, which can lead to maintainability complications or a more difficult authoring environment.

- Unordered lists
- AKA Bullet lists

### Subsection One

Markdoc uses a fully declarative approach to composition and flow control, where MDX relies on JavaScript and React. This means MDX affords users more power and flexibility, but at the cost of complexity–content can quickly become as complex as regular code, which can lead to maintainability complications or a more difficult authoring environment.

Install the WharfKit library:

```bash
npm install @WharfKit/WharfKit
```

or

```bash
yarn add @WharfKit/WharfKit
```

### Subsection Two

Markdoc's first-class, declarative tag syntax integrates seamlessly with Markdown content and can make it simpler to handle content transforms, static analysis, and validation in a unified, lightweight manner. In MDX, some of these tasks require operating on a more complicated JavaScript AST and accounting for the full spectrum of JavaScript language features. MDX also has a significantly larger runtime dependency footprint and relies on a JavaScript parser to handle the embedded logic.

> One of the key motivations for creating Markdoc at Stripe was to create a format that is optimized for writing rather than programming so that we could overcome the challenges that resulted from mixing code and content in our legacy documentation platform. With Markdoc, contributors can iterate quickly without having to subject their edits to a code review and the standard of technical scrutiny that we would have to apply to a format that supports embedded JavaScript. Markdoc also helps us enforce stronger controls around presentation and page logic, avoiding situations in which one-off hacks and procedural content generation introduce bugs and unpredictable behavior.

## Another Section

MDX is a Markdown variant that allows users to embed content written in JavaScript and React's JSX templating syntax. Like Markdoc, MDX makes it possible to incorporate React components into a piece of documentation. The key difference is that MDX supports arbitrarily-complex JavaScript logic (think: docs as code) while Markdoc enforces a strict separation between code and content (think: docs as data).

Markdoc uses a fully declarative approach to composition and flow control, where MDX relies on JavaScript and React. This means MDX affords users more power and flexibility, but at the cost of complexity–content can quickly become as complex as regular code, which can lead to maintainability complications or a more difficult authoring environment.

![Image](https://picsum.photos/seed/picsum/760/400)

One of the key motivations for creating Markdoc at Stripe was to create a format that is optimized for writing rather than programming so that we could overcome the challenges that resulted from mixing code and content in our legacy documentation platform. With Markdoc, contributors can iterate quickly without having to subject their edits to a code review and the standard of technical scrutiny that we would have to apply to a format that supports embedded JavaScript. Markdoc also helps us enforce stronger controls around presentation and page logic, avoiding situations in which one-off hacks and procedural content generation introduce bugs and unpredictable behavior.

Markdoc's first-class, declarative tag syntax integrates seamlessly with Markdown content and can make it simpler to handle content transforms, static analysis, and validation in a unified, lightweight manner. In MDX, some of these tasks require operating on a more complicated JavaScript AST and accounting for the full spectrum of JavaScript language features. MDX also has a significantly larger runtime dependency footprint and relies on a JavaScript parser to handle the embedded logic.

## So many sections

MDX is a Markdown variant that allows users to embed content written in JavaScript and React's JSX templating syntax. Like Markdoc, MDX makes it possible to incorporate React components into a piece of documentation. The key difference is that MDX supports arbitrarily-complex JavaScript logic (think: docs as code) while Markdoc enforces a strict separation between code and content (think: docs as data).

Markdoc uses a fully declarative approach to composition and flow control, where MDX relies on JavaScript and React. This means MDX affords users more power and flexibility, but at the cost of complexity–content can quickly become as complex as regular code, which can lead to maintainability complications or a more difficult authoring environment.

One of the key motivations for creating Markdoc at Stripe was to create a format that is optimized for writing rather than programming so that we could overcome the challenges that resulted from mixing code and content in our legacy documentation platform. With Markdoc, contributors can iterate quickly without having to subject their edits to a code review and the standard of technical scrutiny that we would have to apply to a format that supports embedded JavaScript. Markdoc also helps us enforce stronger controls around presentation and page logic, avoiding situations in which one-off hacks and procedural content generation introduce bugs and unpredictable behavior.

Markdoc's first-class, declarative tag syntax integrates seamlessly with Markdown content and can make it simpler to handle content transforms, static analysis, and validation in a unified, lightweight manner. In MDX, some of these tasks require operating on a more complicated JavaScript AST and accounting for the full spectrum of JavaScript language features. MDX also has a significantly larger runtime dependency footprint and relies on a JavaScript parser to handle the embedded logic.

| Item         | Price    | # In stock |
| ------------ | -------- | ---------- |
| Juicy Apples | 1.99     | _7_        |
| Bananas      | **1.89** | 5234       |
