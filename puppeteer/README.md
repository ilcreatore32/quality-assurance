# QA with Puppeteer, Jest, TypeScript, and Bun

<div align="center">
    <img
        src="https://socialify.git.ci/ilcreatore32/quality-assurance/image?description=1&font=Source+Code+Pro&language=1&name=1&owner=1&pattern=Transparent&theme=Auto"
        alt="project-image"
    />
</div>

This project demonstrates how to implement end-to-end (E2E) testing for web applications using a modern stack: **Puppeteer** for browser automation, **Jest** as the testing framework, **TypeScript** for enhanced code quality, and **Bun** as a fast JavaScript runtime and package manager.

## Inspiration

This project was created by applying the knowledge gained from the **Platzi** course on web automation. While not a direct project from the course, it leverages the principles and techniques taught to build a robust and maintainable testing suite. You can find more valuable learning resources at [Platzi](https://platzi.com/).

Test Automation Courses

- [**Puppeteer.**](https://platzi.com/cursos/puppeteer/)
- [**Advanced Puppeteer.**](https://platzi.com/cursos/puppeteer-avanzado/)

## Technologies Used

- **Puppeteer:** A Node.js library which provides a high-level API to control headless Chrome or Chromium.
- **Jest:** A delightful JavaScript Testing Framework with a focus on simplicity.
- **TypeScript:** A superset of JavaScript that adds static typing to the language, improving code readability and maintainability.
- **Bun:** An incredibly fast JavaScript runtime, bundler, transpiler, and package manager — all in one.

## Setup and Installation

1. **Install Bun:** If you haven't already, install Bun by following the instructions on the official website: [https://bun.sh/](https://bun.sh/)

2. **Clone the repository:**

```bash
git clone https://github.com/ilcreatore32/quality-assurance.git
cd quality-assurance/puppeteer
```

3. **Install dependencies using Bun:**

```bash
bun install
```

## Project Configuration

- **`jest.config.js`:** Configures the Jest options.
- **`tsconfig.json`:** Configures the TypeScript compiler options.
- **`package.json`:** Contains project metadata and scripts. Bun automatically creates a `bun.lockb` file for dependency management.

- **`.env`:** Contains environment variables for your end-to-end tests. If this file is not present, only tests against publicly accessible parts of the website will be available. This is useful for managing sensitive information like API keys or specific test environment URLs.

## Key Features and Concepts

- **Developed with Babel (for initial ES6 support):** While this project now leverages TypeScript and Bun's built-in transpilation, the initial setup utilized Babel to transpile ES6 JavaScript code before migrating to TypeScript for enhanced type safety and developer experience.

- **BasePage (`src/pages/base.page.ts`):** This class provides a set of common utility functions and interactions with Puppeteer's `Page` object. It aims to reduce code duplication across different page object implementations. Examples of utilities might include:

  - Navigating to a URL.
  - Waiting for selectors.
  - Taking screenshots.
  - Handling common UI elements.

- **Testing: 'Netcom Plus Iniciativas' (`./__tests__/*.test.ts`):** This directory contains the test files written using Jest and Puppeteer to verify the functionality and user experience of a website that I created for Netcom Plus. These tests demonstrate how to interact with different elements, assert expected behaviors, and ensure the quality of your web application.

## Running the Tests

To execute the tests, use the following command:

```bash
bun run test
```
