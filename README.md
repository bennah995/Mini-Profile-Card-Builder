# 👤 Mini Profile Card Builder

Transform your digital identity in real-time! This interactive web application allows users to dynamically generate a professional profile card while experimenting with DOM manipulation and theme switching. It’s designed to showcase the power of JavaScript in creating responsive, user-driven interfaces.

## 🛠 The Tech Stack
**HTML5:** Structured the semantic layout for inputs and the profile card.

**CSS3:** Styled the card aesthetics and defined the Light/Dark mode transitions.

**JavaScript (ES6+):** Handled DOM selection, event listeners, and dynamic style injection.

## ✨ Key Features
**Live Data Binding:** Instantly update the card’s Name, Tech Stack, and Career Goal using the Update Card function.

**Dynamic Styling:** Automatically applies a fresh visual identity (colors, borders, and shadows) to the card upon updating.

**Theme Toggle:** A one-click switch between Light Mode and Dark Mode for better accessibility and user preference.

**State Reset:** Quickly clear all user inputs and revert the profile card to its original "factory settings" with a single button.

## 🚀 Installation & Local Setup
Want to test this project on your local machine? Follow these simple steps:

**1. Clone the repository:**

```
git clone https://github.com/your-username/mini-profile-card.git
```

**2. Navigate to the project directory:**

```
cd mini-profile-card
```

**3. Launch the project:** 

Open profile.html directly in your favorite web browser, or use the "Live Server" extension in VS Code.

### 🧠 Lessons Learned (Reflection)
The Hardest Part: The most challenging aspect was managing the "Reset" state. Initially, clicking reset would clear the text, but the custom styles applied during the "Update" phase (like border colors and box shadows) would persist, leaving the card looking inconsistent.

The Solution: I learned that using .style properties in JavaScript adds inline styles, which have high specificity. To fix this, I created a resetStyles() function that explicitly set the .style properties back to empty strings or their default CSS values. This taught me the importance of thinking about the "lifecycle" of an element's appearance when building interactive UIs.