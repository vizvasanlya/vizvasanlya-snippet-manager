# Developer Snippet Manager

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Store reusable code snippets, tag by language, track favorites, and copy patterns quickly.

## Features

- **Snippet Storage** — Save code snippets with metadata and context
- **Language Tagging** — Organize by programming language and framework
- **Favorites System** — Pin and prioritize frequently used snippets
- **Quick Copy** — One-click copy to clipboard
- **Search & Filter** — Find snippets by language, tag, or content
- **Analytics View** — Language distribution and usage insights
- **Import / Export** — JSON-based snippet data portability

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES2022) |
| Storage | LocalStorage |
| Server | Python HTTP server (dev) |

## Getting Started

### Prerequisites

- Python 3.x (for dev server)
- Modern web browser

### Installation

```bash
git clone https://github.com/vizvasanlya/First.git
cd First/vizvasanlya-snippet-manager
```

### Run

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173)

### Docker

```bash
docker compose up --build
```

## License

MIT
