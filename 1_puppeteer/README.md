# QA with Playwright, Node.js, and TypeScript

![project-image](https://socialify.git.ci/ilcreatore32/quality-assurance/image?description=1&font=Source+Code+Pro&language=1&name=1&owner=1&pattern=Transparent&theme=Auto)

This project demonstrates how to implement end-to-end (E2E) testing for web applications using a modern stack: **Playwright** for browser automation and testing, **TypeScript** for enhanced code quality, and **Node.js** as the JavaScript runtime environment.

## Inspiration

This project was created by applying the knowledge gained from the **Platzi** course on web automation. While not a direct project from the course, it leverages the principles and techniques taught to build a robust and maintainable testing suite. You can find more valuable learning resources at [Platzi](https://platzi.com/).

Test Automation Courses

- [**Playwright.**](https://platzi.com/cursos/playwright/)

## Technologies Used

- **Playwright:** A Node.js library developed by Microsoft that provides a high-level API to control Chromium, Firefox, and WebKit browsers with a single API.
- **TypeScript:** A superset of JavaScript that adds static typing to the language, improving code readability and maintainability.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine. It is essential for running Playwright and Jest.

## Setup and Installation

1. **Ensure Node.js is installed:** You can download it from [https://nodejs.org/](https://nodejs.org/). It is recommended to install the LTS (Long Term Support) version.

2. **Clone the repository:**

```bash
git clone https://github.com/ilcreatore32/quality-assurance.git
cd quality-assurance/playwright
```

3. **Install dependencies using npm:**

```bash
npm install
```

## Project Configuration

- **`package.json`:** Contains project metadata and scripts.
- **`.env`:** Contains environment variables for your end-to-end tests. If this file is not present, only tests against publicly accessible parts of the website will be available. This is useful for managing sensitive information like API keys or specific test environment URLs.

## Key Features and Concepts

- **Developed with TypeScript:** TypeScript is used to provide static typing, which helps catch errors during development, improves code readability, and facilitates collaboration.

## Running the Tests

To execute the tests, use the following command:

```bash
npm run test
```
