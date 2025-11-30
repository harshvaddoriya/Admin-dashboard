Micro Frontend Architecture – Multi Next.js Apps (Module Federation)
This repository contains a micro-frontend architecture built using Next.js and Module Federation(runtime Federation).
Each application runs independently and can also work together as part of a unified system.

📂 Project Structure
root/
├── shell-app/ # Main / Host Application
├── mf-users/ # Remote Application 1
├── mf-analysis/ # Remote Application 2

⚙️ Prerequisites

Ensure the following are installed:

Node.js v18+

npm or yarn

Each app must run on a unique port

🚀 Setup Instructions

Follow the steps below to install and run each application independently or together in micro-frontend mode.

1. Install Dependencies

Install dependencies for each app (run inside every folder):

cd shell-app && npm install
cd ../mf-analysis && npm install
cd ../mf-users && npm install

Make sure all apps are installed before starting any of them.

2. Run Each App Individually

Each application is a standalone Next.js project and can be started separately.

Main App (Host)

Folder: shell-app
Port: 3000

Run:

cd shell-app
npm run dev

Folder: mf-analysis
Port : 3002

Run:

cd mf-analysis
npm run dev

Folder: mf-users
Port: 3001

Run:

cd mf-users
npm run dev

The Main App will automatically load:

Admin Remote → http://localhost:3000/\_next/static/chunks/remoteEntry.js
Analytics Remote → http://localhost:3002/\_next/static/chunks/remoteEntry.js
Users/shop Remote → http://localhost:3001/\_next/static/chunks/remoteEntry.js
