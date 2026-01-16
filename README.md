<div align="center">
  
<h1 align="center">
  SmartPaeds
  <br>
  <sub>Paediatric Clinical Decision Support System</sub>
</h1>

**A fail-safe CDSS providing rapid dosage guidance for junior paediatric practitioners,<br>reducing dosing decision time by up to 90%.**

<br>

[![Live Demo](https://img.shields.io/badge/Demo-Live%20App-blue?style=for-the-badge&logo=vercel)](https://yunkkstudy.github.io/SmartPaeds/)

<br>

![SmartPaeds Demo](demo.gif)

> *"Transforming theoretical calculations into immediately actionable clinical data."*

</div>



## 🛠 Key Features

### 1. 🧠 Smart Dosing Algorithm 
* **Beyond Simple Math**: The app doesn't just calculate `10.41 mg`. It snaps results to clinically practical increments (e.g. **0.25, 0.5 tablets**) using a custom grid system.
* **Formulation Aware**: Automatically handles rounding logic differently for **Liquid medicine (mL)** vs **Solid Dosage Forms (Tab, Cap, etc.)**.

### 2. 🛡️ Real-time Safety Auditing
* **Duplicate Detection**: The system scans active ingredients in real-time. If you select *Anti-phen* and *Acetal* (both Acetaminophen), it instantly triggers a visual alert to prevent overdose.
* **Max Dose Protection**: Hard-coded safety caps ensure calculated doses never exceed adult maximums.

### 3. 💾 Workflow Efficiency 
* **State Management**: Utilises **LocalStorage API** to persist prescription data across browser sessions.
* **Use Case**: Allows users to save frequently used drug combinations (e.g. Common Cold bundle), significantly reducing manual search time for routine cases.

### 4. 📱 Responsive & Resilient Architecture
* **Adaptive Layout**: Fully responsive design ensuring a user-friendly experience on both **Desktop (landscape)** and **Mobile (portrait)** devices.
* **Offline-First**: Implements a robust fallback mechanism. If the live JSON fetch fails, it switches to embedded `BACKUP_DATA` to guarantee 100% uptime.

## 💻 Tech Stack
* **Frontend**: HTML5, Tailwind CSS, JavaScript
* **Data**: JSON (Relational Data Modeling)
* **Tools**: SortableJS (Drag & Drop Interface)

---
*Developed by YUN-KE LU - Pharmacist & Developer*
