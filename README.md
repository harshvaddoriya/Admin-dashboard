microfrontend_project:
name: "Micro Frontend Architecture – Multi Next.js Apps"
description: "Multi Next.js Micro Frontend using Module Federation (Runtime Federation). Each application runs independently and can also work together as a unified system."

project_structure:
root: - shell-app: "Main / Host Application" - mf-users: "Remote Application 1" - mf-analysis: "Remote Application 2"

prerequisites: - "Node.js v18+" - "npm or yarn" - "Each app must run on a unique port"

install_dependencies:
description: "Install dependencies for each app (run inside every folder)"
commands: - "cd shell-app && npm install" - "cd ../mf-analysis && npm install" - "cd ../mf-users && npm install"
note: "Make sure all apps are installed before starting any of them."

run_each_app_individually:
description: "Each application is a standalone Next.js project and can be started separately."
apps:
shell-app:
type: "Host / Main App"
folder: "shell-app"
port: 3000
run: "cd shell-app && npm run dev"
mf-analysis:
type: "Remote App 2"
folder: "mf-analysis"
port: 3002
run: "cd mf-analysis && npm run dev"
mf-users:
type: "Remote App 1"
folder: "mf-users"
port: 3001
run: "cd mf-users && npm run dev"

run_all_apps_together:
description: "Run apps in Micro-Frontend mode. Start apps in this order."
steps: - step: "Start Users Remote"
command: "cd mf-users && npm run dev" - step: "Start Analysis Remote"
command: "cd mf-analysis && npm run dev" - step: "Start Host App"
command: "cd shell-app && npm run dev"
access: "http://localhost:3000"

remote_entries:
description: "RemoteEntry URLs loaded by the Host App (shell-app)"
remotes:
mf-users:
port: 3001
remoteEntry: "http://localhost:3001/\_next/static/chunks/remoteEntry.js"
mf-analysis:
port: 3002
remoteEntry: "http://localhost:3002/\_next/static/chunks/remoteEntry.js"
note: "The host shell-app will not have a remoteEntry.js unless explicitly configured to expose modules."
