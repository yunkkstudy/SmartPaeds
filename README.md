<div align="center">

  <img src="demo2.gif" alt="SmartPaeds Demo" width="700" style="border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); max-width: 100%;">

  <br>

  <a href="https://yunkkstudy.github.io/SmartPaeds/">
    <img src="https://img.shields.io/badge/Demo-Live%20App-blue?style=for-the-badge&logo=github" alt="Live Demo">
  </a>

  <br>

  <h1 style="margin-bottom: 0px;">SmartPaeds</h1>
  <h3>Paediatric Clinical Decision Support System</h3>

  <p>
    <i>A fail-safe CDSS providing rapid dosage guidance for junior paediatric practitioners,<br>
    reducing dosing decision time by up to <b>90%</b>.</i>
  </p>

  <hr width="60%" style="opacity: 0.5;">
  
  <br>

</div>

## 🛠 Key Features

<details>
  <summary>1. 🧠 Smart Dosing Algorithm</summary>

  *   **Beyond Simple Math**: The app doesn't just calculate `5.7mL`. It snaps results to clinically practical increments `5.5mL` using a custom grid system.
  *   **Formulation Aware**: Automatically handles rounding logic differently for **Liquid medicine (mL)** vs **Solid Dosage Forms (Tab, Cap, etc.)**.
</details>

<details>
  <summary>2. 🛡️ Real-time Safety Auditing</summary>

  *   **Duplicate Detection**: The system scans active ingredients in real-time. If you select *Anti-phen* and *Acetal* (both Acetaminophen), it instantly triggers a visual alert to prevent overdose.
  *   **Max Dose Protection**: Hard-coded safety caps ensure calculated doses never exceed adult maximums.
</details>

<details>
  <summary>3. 💾 Workflow Efficiency</summary>

  *   **State Management**: Utilises **LocalStorage API** to persist prescription data across browser sessions.
  *   **Use Case**: Allows users to save frequently used drug combinations (e.g. Common Cold bundle), significantly reducing manual search time for routine cases.
</details>

<details>
  <summary>4. 📱 Responsive & Resilient Architecture</summary>

  *   **Adaptive Layout**: Fully responsive design ensuring a user-friendly experience on both **Desktop** and **Mobile** devices.
  *   **Offline-First**: Implements a robust fallback mechanism. If the live JSON fetch fails, it switches to embedded `BACKUP_DATA` to guarantee 100% uptime.
</details>

<details>
  <summary>💻 Tech Stack</summary>

  *   **Frontend**: HTML5, Tailwind CSS, JavaScript (ES6+)
  *   **Data**: JSON (Schema-based Data Modeling)
</details>
