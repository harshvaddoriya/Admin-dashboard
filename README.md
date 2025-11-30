# Micro Frontend Architecture – Multi Next.js Apps (Module Federation)

This repository contains a **micro-frontend architecture** built using **Next.js** and **Module Federation (Runtime Federation)**.  
Each application runs independently and can also work together as a unified system.

---

## 📂 Project Structure

root/
├── shell-app/ # Main / Host Application
├── mf-users/ # Remote Application 1
├── mf-analysis/ # Remote Application 2

---

## ⚙️ Prerequisites

Ensure the following are installed:

- **Node.js v18+**
- **npm or yarn**
- Each app must run on a **unique port**

---

## 🚀 Setup Instructions

Follow the steps below to install and run each application **independently** or **together** in micro-frontend mode.

---

### 1️⃣ Install Dependencies

Run inside each folder:

```bash
cd shell-app && npm install
cd ../mf-analysis && npm install
cd ../mf-users && npm install
```

### 2️⃣ Run Each App Individually

Each application is a standalone Next.js project and can be started separately

\*\*\*Main App (Host)

Folder: shell-app

Port: 3000\*\*\*

---
