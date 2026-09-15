# Yatraverse 🧳

> Real traveler data → Analysis → Similar trips → Personalized, budget-friendly trip plans.

Yatraverse is a data-driven trip planning platform that helps travelers plan trips based on **real experiences of past travelers** — not just generic ratings and blog posts.

Instead of guessing your budget or itinerary, you enter your trip details (group size, destination, duration, budget) and Yatraverse finds **similar real trips** taken by others, showing you what they spent, where they stayed, what they visited, and how you can recreate a similar experience within your own budget.

---

## 🚩 The Problem

When planning a trip, people usually have to manually piece together answers from Google, Instagram, and YouTube:

- Where should we stay?
- How much will the whole trip actually cost?
- Which transport option is best?
- Where should we eat?
- Which places are actually worth visiting?
- Are travel packages worth the money?

This process is scattered, time-consuming, and often based on unreliable or outdated information.

## 💡 The Solution

Yatraverse lets travelers upload their **completed trips** with full cost breakdowns and experiences. When a new user plans a trip, the platform matches their requirements against this real trip data and recommends the most relevant, realistic plans.

### Example

A traveler uploads their completed trip:

```
👥 3 people
📍 Delhi → Manali
🗓️ 4 days
💰 Total: ₹21,000 (₹7,000/person)
🚌 Bus: ₹2,000
🏨 Stay: ₹2,400
🍛 Food: ₹1,500
🚕 Local travel: ₹800
🎟️ Activities: ₹700
📍 Places visited: Solang Valley, Mall Road, Old Manali
⭐ Experience: 4.5/5
```

A new user searching **"3 people + 4 days + ₹8,000 budget + Manali"** gets:

> "Here are 15 similar trips people have already taken — here's what they spent and where they went."

Yatraverse then generates a personalized budget estimate and itinerary suggestion based on these matches.

---

## ✨ Core Features (MVP)

- 📝 **Trip Upload** — Submit a completed trip with cost breakdown, places visited, and rating
- 🔍 **Smart Search** — Enter destination, group size, days, and budget
- 🤝 **Similarity Matching Engine** — Finds and ranks trips most similar to your requirements
- 💰 **Budget Estimation** — Predicts realistic expected cost based on matched trips
- 🗺️ **Itinerary Suggestion** — Auto-suggests places to visit, pulled from matched trips

## 🚀 Future Scope

- 🤖 AI-generated day-by-day itineraries
- 💸 Group expense splitting
- 🗺️ Interactive maps and route planning
- ☀️ Weather-based recommendations
- 🏨 Hotel & food recommendations
- 📊 Trip clustering (e.g. "backpacker" vs "comfort" trip styles)

---

## 🧠 How Matching Works

Each trip is stored with normalized attributes:

- Group size
- Origin & destination
- Duration (days)
- Total budget / budget per person
- Cost breakdown (transport, stay, food, local travel, activities)
- Places visited
- Experience rating

When a user submits a query, the system scores stored trips by closeness on group size, budget per person, and duration (e.g. a weighted distance / K-Nearest Neighbors approach), then returns the top N most similar trips along with an aggregated budget estimate.

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Frontend      | React.js                             |
| Backend       | Node.js / Express (or Python/Flask)  |
| Database      | MongoDB / PostgreSQL                 |
| Matching Logic| Custom scoring function / scikit-learn KNN |

*(Update this table once the team finalizes the stack.)*

---

## 📂 Project Structure

```
yatraverse/
├── client/          # Frontend (React)
├── server/          # Backend (API, matching engine)
├── database/        # Schema & seed data
├── docs/            # Project report, diagrams, presentation
└── README.md
```

---

## ⚙️ Getting Started

```bash
# Clone the repository
git clone https://github.com/<your-username>/yatraverse.git
cd yatraverse

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Run the app
npm run dev
```

*(Update these steps once the actual setup is finalized.)*

---

## 👥 Team

| Name | Role |
|------|------|
| Your Name | Backend / Matching Engine |
| Teammate 2 | Frontend |
| Teammate 3 | Database / Data Collection |

---

## 📄 License

This project is created for academic purposes as part of a college project.
