<div align="center">
<img width="1200" alt="Iran Protest Intel" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Iran Protest Intel

Geolocated protest and civil unrest intelligence visualized on a 3D globe. Telegram channel data is parsed by Gemini AI into structured event timelines with situation reports.

## Features

- **Real-Time Intel Feed** — Extracts protest events from Farsi Telegram channels
- **Globe Visualization** — Leaflet-based 3D globe with event clustering
- **AI Summaries** — Gemini-generated situation reports for regional developments
- **Bilingual Interface** — English and Farsi
- **Offline Cache** — Events persisted in localStorage

## Tech Stack

- React 18, TypeScript, Vite
- Leaflet + react-leaflet
- @google/genai
- lucide-react

## Getting Started

```bash
npm install
# Set GEMINI_API_KEY in .env.local
npm run dev
```

## CI

![CI](https://github.com/Tabasiarash/Iranprotest-intel/actions/workflows/ci.yml/badge.svg)

## License

MIT
