# LawGuide ⚖️

**LawGuide** is a digital library of global constitutions and legal frameworks. The goal of this project is to democratize legal knowledge by providing a centralized, accessible platform where individuals can explore the laws of different countries and better understand their fundamental rights.

---

## 📸 Screenshots

![Library Page](./library.png) 

---

## 📌 Features

* **International Repository:** A structured database designed to hold constitutional texts from multiple nations.
* **Rights Awareness:** Focused on making legal documents searchable so users can quickly find information regarding their civil rights.
* **Clean Reading Experience:** A minimalist UI designed to make heavy legal text easy to read and navigate.
* **Scalable Schema:** A backend architecture built to expand as more countries and legal documents are added.

## 🛠 Tech Stack

* **Frontend:** React.js (Functional Components & Hooks)
* **Database:** Supabase (PostgreSQL)
* **Styling:** Custom CSS3 (Responsive Design)

## 🚀 Project Status: Work in Progress

LawGuide is an ongoing project. While the core infrastructure and initial library are functional, future updates will include:
* **AI Summaries:** Using LLMs to simplify complex legal jargon into plain language.
* **Cross-Country Comparison:** A tool to compare how different constitutions address specific topics (e.g., Freedom of Speech).
* **Dark Mode:** Optimized for long-form reading in low-light environments.

---

## 🏗 Technical Challenges & Learnings

* **Complex Data Modeling:** Laws are hierarchical (Parts > Chapters > Articles). I designed a relational database schema in Supabase to maintain this structure across diverse international formats.
* **Text Heavy UI:** Solved the challenge of "text fatigue" by implementing specific typography rules and whitespace management in CSS to ensure the laws remain readable.
* **State Management:** Handled dynamic data fetching from Supabase based on user selection to ensure a fast, single-page application experience.

---

## 🤝 Contributing & Learning

I am actively looking for contributors who are passionate about legal transparency and open data.

**How you can help:**
* **Data Integration:** Help in sourcing and formatting legal texts for new countries.
* **Feature Development:** Improving search filters and navigation logic.
* **Bug Reports:** Feel free to open an issue if you find a bug in the current build.

---

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

* **Learning & Contribution:** You are welcome to use this code for educational purposes or to contribute to the project.
* **Non-Commercial:** This project and its source code may not be used for commercial purposes.
* **Attribution:** Please credit the original author if you reference this work.

---
