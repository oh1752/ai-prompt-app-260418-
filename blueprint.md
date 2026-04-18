# AI Prompt Repository Blueprint

## Overview
A modern, responsive web application serving as a repository for AI prompts categorized by job roles (Marketer, Developer, Designer, etc.). Users can browse, search, filter by role, and copy "best practice" prompts to their clipboard with a single click.

## Features
- **Job Role Filtering:** Filter prompts by categories like Marketer, Developer, Planner, Designer.
- **Search Functionality:** Real-time text search across prompt titles and descriptions.
- **Dark Mode:** A toggleable dark/light theme for comfortable viewing.
- **Prompt Cards:** Visually appealing cards displaying the prompt title, tags, and content.
- **One-Click Copy:** A copy button on each card with visual feedback (toast notification).
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Design & UI/UX
- **Color Palette:** CSS variables for seamless switching between light and dark themes. Use of primary accent colors (e.g., a vibrant blue/indigo) for interactive elements.
- **Typography:** Clean, modern sans-serif fonts (e.g., Inter, system-ui).
- **Interactivity:** Hover effects on cards, smooth transitions for theme switching, and instant visual feedback when copying text.

## Implementation Steps
1.  **Structure (HTML):** Create the layout with a header (logo, dark mode toggle), search bar, category filter chips, and a grid container for prompt cards. Include a toast notification container.
2.  **Styling (CSS):** Define CSS variables for themes. Style the layout using CSS Grid and Flexbox. Add baseline styles, component styles (cards, buttons, inputs), and responsive media queries.
3.  **Logic (JavaScript):**
    -   Define a static array of prompt objects (data).
    -   Implement rendering logic to generate DOM elements for prompts.
    -   Implement search and filter logic to update the displayed prompts.
    -   Implement the "Copy to Clipboard" functionality using the modern Clipboard API.
    -   Implement Dark Mode toggle logic saving preference to `localStorage`.
