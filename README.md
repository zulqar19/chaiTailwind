
# ☕ Chai Tailwind (CHAI.engine)
A lightweight, **Zero-CSS**, JavaScript-powered utility engine that brings the power of Tailwind-like classes to your HTML dynamically. No build steps, no massive CSS files—just pure logic.

**Chai Tailwind** is a micro-engine designed for developers who want the flexibility of utility classes without the overhead of a CSS framework. It scans your HTML for `chai-` prefixed classes and applies styles on the fly using custom scaling and mapping logic.
### Key Features:*   
**JIT (Just-In-Time) Hex Colors:** Use any hex code directly in your class names (e.g., `chai-bg-#1e1e1e`).
*   **Dynamic Power Scaling:** Padding and Margin values are calculated using `value ** 2` for a natural, non-linear spacing system.
*   **Static Mapping:** Supports complex properties like `flex`, `grid`, `position`, and `textAlign` via a simple object map.*   **Zero Configuration:** Just include the script and start writing classes.
---## 🛠️ How It Works
The engine splits your classes into `prefix`, `utility type`, and `value`.
1.  **Dynamic Utilities (Numbers):** Uses math to scale values.
    *   `chai-p-4` ➔ `padding: 16px` ($4^2$)
    *   `chai-fs-8` ➔ `font-size: 40px` ($8 \times 5$)2.  **Static Utilities (Strings):** Maps keywords directly to CSS properties.
    *   `chai-d-flex` ➔ `display: flex`
    *   `chai-text-center` ➔ `text-align: center`
---## 📖 Usage Example
You can build complex UI components entirely with utility classes. Here is how a card looks:

```html
<!-- A simple card using Chai Tailwind -->
<div class="chai-bg-#161616 chai-p-8 chai-rounded-4 chai-shadow-inner">
    <h3 class="chai-fs-6 chai-text-color-#ffdd44">Hello Chai!</h3>
    <p class="chai-text-color-#aaa chai-mt-4">
        Dynamic styling at your fingertips. Built with pure JS logic.
    </p>
</div>

```
------------------------------
## 🖼️ Project Showcase
<p align="center">
  <img src="\images\hero.png" width="300" height="300" />
</p>

------------------------------
## 🏗️ Project Approach & Learnings
### Technical Approach
I built this engine to solve the problem of CSS bloat. By using a Map-Reduce style logic, the script identifies the utility intent and calculates the value based on whether it is a spatial property (margin/padding) or a layout property (flex/display).
Learnings

* Deep understanding of DOM Manipulation and classList APIs.
* Mastered String Parsing logic for multi-part class names (e.g., chai-text-color-#fff).
* Implemented Functional Scaling to replace standard linear CSS scales.

------------------------------
## 🛠️ Tech Stack

* HTML5
* JavaScript (ES6+)
* Vite (Build Tool)

------------------------------
## 🔧 Installation

   1. Clone the repo:
   
   git clone https://github.com
   
   2. Link your script:
   
   <script type="module" src="/src/main.js"></script>
   
   
------------------------------
## 👨‍💻 Author
### Md Zulqarnain
Software Developer & Open Source Enthusiast

* GitHub: @zulqar19
* LinkedIn: Md Zulqarnain
* X (Twitter): @ZuLQarNaiN1920

------------------------------
## 📄 License
This project is licensed under the MIT License. Feel free to use it, fork it, and improve it!

