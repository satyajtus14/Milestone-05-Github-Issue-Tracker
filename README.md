# 🚀 GitHub Issue Tracker

<div align="center">

<p align="center">
  <img src="public/logo.png" alt="Logo" width="200" />
</p>



**A sleek and intuitive client-side GitHub Issue Tracker for efficient task management, built with modern web technologies.**

[Live Demo](https://satyajtus14.github.io/Project-Github-Issue-Tracker/)     

</div>

## 📖 Overview

The GitHub Issue Tracker is a frontend-only web application designed to help users manage and track issues effectively. It provides a clean, responsive interface for creating, viewing, updating, and deleting issues, leveraging modern CSS frameworks for a polished user experience. Ideal for personal project management or as a learning resource for web development fundamentals.

## ✨ Features

-   🎯 **Issue Management**: Create new issues, update existing ones, and mark them as closed or deleted.
-   💾 **Local Storage Persistence**: All issue data is stored client-side using browser local storage, ensuring data persists across sessions.
-   🔍 **Issue Filtering & Search**: Easily find issues by status or through a search functionality.
-   🎨 **Modern UI with Tailwind CSS & Daisy UI**: A responsive and aesthetically pleasing user interface crafted with Tailwind CSS for utility-first styling and Daisy UI for ready-made components.
-   ✍️ **Vanilla JavaScript Interactivity**: Dynamic client-side behavior powered purely by Vanilla JavaScript, showcasing fundamental web development practices.
-   📱 **Responsive Design**: Adapts seamlessly to various screen sizes, from desktops to mobile devices.

## Live Link 
- Github : https://satyajtus14.github.io/Project-Github-Issue-Tracker/

## 🛠️ Tech Stack

**Frontend:**
-   **HTML5**: Structure and content of the web pages.    
-   **Vanilla JavaScript**: Core logic and dynamic interactivity.    
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.    
    [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)    
-   **Daisy UI**: Tailwind CSS component library for ready-to-use UI elements.    
    [![Daisy UI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)    
-   **Vanilla CSS**: Custom styling for specific elements.    

## 🚀 Quick Start

To get this project up and running on your local machine, follow these simple steps.

### Prerequisites
-   A modern web browser (e.g., Chrome, Firefox, Edge, Safari).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/satyajtus14/Milestone-05-Github-Issue-Tracker.git
    cd Milestone-05-Github-Issue-Tracker
    ```

2.  **Open the application**
    This is a static HTML/CSS/JS application, so no server setup is strictly required to view it.
    -   Simply open `index.html` or `home.html` directly in your web browser.
        `file:///path/to/Milestone-05-Github-Issue-Tracker/home.html`
    -   For a better development experience with live reloading, you can use a local web server like the "Live Server" extension for VS Code.

### Start development server
If using a local server (e.g., Live Server VS Code extension):
1.  Right-click on `home.html` (or `index.html`) in your editor.
2.  Select "Open with Live Server" (or equivalent option for your local server).

### Open your browser
The application will open in your default browser at a URL like `http://localhost:5500/home.html` (port may vary).

## 📁 Project Structure

```
Milestone-05-Github-Issue-Tracker/
├── assets/                  # Directory for images, fonts, and other static assets
├── scripts/                 # Contains JavaScript files for application logic
├── home.html                # The main application page for issue tracking
├── index.html               # Initial landing page or login placeholder
├── style.css                # Custom CSS styles
├── tailwind.css             # Tailwind CSS output/base styles
├── tailwind.config.js       # Configuration file for Tailwind CSS
└── README_OLD.md            # Previous README documentation
```

## ⚙️ Configuration

### Tailwind CSS Configuration
The `tailwind.config.js` file allows you to customize your Tailwind CSS setup, including themes, plugins, and content paths.

```JavaScript
// tailwind.config.js (Example, actual content may vary)
module.exports = {
  content: ["./*.html", "./scripts/*.js"], // Paths to your HTML and JS files
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Or customize with different themes
  },
};
```
If you make changes to `tailwind.config.js` or directly edit `tailwind.css`, you might need to rebuild Tailwind CSS depending on your setup. As this project is purely static, it's assumed `tailwind.css` is pre-generated or linked via CDN. For advanced customization, you would typically use a build tool like `npm` and `PostCSS`.

## 🔧 Development

Development for this project involves editing the HTML, CSS, and JavaScript files directly. There are no specific build scripts configured within the repository (e.g., in a `package.json`).

### Available Scripts
N/A - This project does not use a package manager with defined scripts.

### Development Workflow
1.  Make changes to HTML, CSS, or JavaScript files.
2.  Refresh your browser (or rely on Live Server for auto-reloads) to see updates.
3.  For Tailwind CSS modifications, you might need to manually compile Tailwind if you're not using a CDN, or integrate a simple build process (e.g., via a `package.json` with `tailwindcss` as a dev dependency) if you wish to customize beyond what's pre-built.

## 🧪 Testing

This project does not include an explicit testing framework setup. Functionality can be manually tested by interacting with the application in a web browser.

## 🚀 Deployment

Since this is a static web application, deployment is straightforward:

### Production Build
There is no specific "build" step for production beyond ensuring all files are present. The `home.html`, `index.html`, `style.css`, `tailwind.css`, `scripts/` directory, and `assets/` directory are the core deployable assets.

### Deployment Options
-   **GitHub Pages**: The simplest way to deploy this project is via GitHub Pages. Push your code to the `main` branch, and configure GitHub Pages to serve from the `main` branch. The demo link above assumes this deployment method.
-   **Any Static Host**: Upload the entire repository content (excluding `.git` and `.DS_Store`) to any static web hosting service (e.g., Netlify, Vercel, Firebase Hosting, Apache/Nginx web server).

## 🤝 Contributing

We welcome contributions! If you have suggestions for improvements, feature ideas, or find bugs, please feel free to:

1.  **Fork this repository.**
2.  **Create a new branch** (`git checkout -b feature/your-feature-name` or `bugfix/your-bug-fix`).
3.  **Make your changes.**
4.  **Commit your changes** (`git commit -m 'feat: Add new feature'`).
5.  **Push to the branch** (`git push origin feature/your-feature-name`).
6.  **Open a Pull Request** to the `main` branch.

## 📄 License

This project is currently **Unlicensed**. Please refer to the repository for more details, or contact the author for licensing inquiries.

## 🙏 Acknowledgments

-   **Tailwind CSS**: For simplifying styling and making modern UI development a breeze.
-   **Daisy UI**: For providing a beautiful set of components on top of Tailwind CSS.
-   **Vanilla JavaScript**: The timeless foundation for dynamic web experiences.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/satyajtus14/Milestone-05-Github-Issue-Tracker/issues)
-   📧 Author: [satyajtus14](https://github.com/satyajtus14)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [satyajtus14](https://github.com/satyajtus14)

</div>
