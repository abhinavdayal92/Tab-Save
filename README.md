# Tab Saver Extension

A simple browser extension to save your current tabs, close them for a clean workspace, and restore them later.


## Features

-   **Save & Close:** Saves all open tabs in your current window to local storage and then closes them.
-   **Restore Session:** Opens all the previously saved tabs, each in a new tab.
-   **Save Multiple Windows:** Allows user to save multiple windows [work , personal , project].
  
## How to Install and Use

Since this is a local project, you need to load it into your browser in "Developer mode."

1.  **Open Chrome Extensions:** Open your Chrome browser and navigate to `chrome://extensions`.
2.  **Enable Developer Mode:** In the top-right corner of the page, toggle the "Developer mode" switch to **On**.
3.  **Load the Extension:**
    -   Click the **"Load unpacked"** button that appears.
    -   In the file selection window, navigate to and select the `TabSave` folder on your computer.
4.  **Ready to Use:** The Tab Saver icon will now appear in your browser's toolbar.
    -   Click the icon to open the pop-up.
    -   Click **"Save & Close Tabs"** to save your current session.
    -   Click **"Restore Last Session"** to bring your saved tabs back.

## Project Files

Here’s a quick look at the files that make this extension work:

-   `manifest.json`: The most important file. It tells the browser what your extension is, what permissions it needs (`tabs`, `storage`), and where to find its files.
-   `popup.html`: The structure and content of the small pop-up window that appears when you click the extension's icon. It contains the two main buttons.
-   `popup.css`: The stylesheet for the pop-up. It makes the interface look clean and user-friendly with colors, spacing, and fonts.
-   `popup.js`: The JavaScript logic that powers the extension. It handles the button clicks, saves the tab URLs, and restores them.
-   `images/`: This folder holds the icons for the extension (`icon16.png`, `icon48.png`, `icon128.png`).
-   `README.md`: This file! It provides information about the project.

## Technologies Used

This extension is built with fundamental web technologies:

-   **HTML:** For the pop-up structure.
-   **CSS:** For styling the pop-up.
-   **JavaScript:** For the core functionality (saving, closing, and restoring tabs).
