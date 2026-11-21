YATRA-VERSE FRONTEND DEMO PROJECT
================================

PAGES
- index.html          Homepage + trip search + featured demo trips
- trips.html          Search and filter sample trip records
- trip-details.html   Individual trip and expense details
- budget.html         Trip budget calculator and expense bars
- login.html          Demo login
- signup.html         Local demo account creation
- dashboard.html      Saved trips and locally submitted trips
- submit-trip.html    Add a trip record to this browser

FOLDERS
- css/style.css       Shared responsive red + light-blue theme
- js/app.js           Page logic, sample records, localStorage demo data
- images/             Put your logo here as images/logo.png if desired

RUN
1. Extract the ZIP.
2. Open the yatra_verse_project folder in VS Code.
3. Recommended: install/use VS Code Live Server.
4. Right-click index.html -> Open with Live Server.
   You can also open index.html directly in a browser.

DEMO LOGIN
Email: demo@yatraverse.test
Password: travel123

DEMO DATA / LIMITATIONS
- The initial trips are hard-coded sample records in js/app.js.
- New trips, accounts, saved trips and current session are stored in this browser's localStorage.
- localStorage is not a real shared database. Data is limited to this browser/device and can be cleared.
- Demo passwords are stored in plain text locally. Never use real passwords.
- There is no backend, server authentication, cloud sync, payment, live prices, map API or verified user content.
- Images and Google Fonts load from external URLs and require internet.
- Costs and trip stories are illustrative project data, not verified actual traveler submissions.

CUSTOMIZE
- Replace the Y brand mark with your own logo in the header, or add images/logo.png and update the brand markup.
- Edit DEMO_TRIPS in js/app.js to change sample records.
- All pages share css/style.css and js/app.js.

FOR A REAL DEPLOYMENT
Use a backend such as Node.js/Express with a database (MongoDB, PostgreSQL, or Firebase), password hashing, validation, secure sessions, and server-side authorization. Do not deploy this local demo authentication as a production login system.
