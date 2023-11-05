# GitHub Commit Calendar

GitHub Commit Calendar is a web application that allows you to visualize your GitHub repository's commit history in a calendar format. It provides a user-friendly way to explore commits made on different dates and view commit details.

The application is built with Vite, React & Tailwind.
It has been deployed and is accessible online via Vercel at [GitHub Commit Calendar](https://commit-calendar.vercel.app/). 

## Getting Started Locally With Docker

### Prerequisites

Before running the project locally using Docker, ensure you have Docker installed. If you don't have it yet, you can [download Docker here](https://www.docker.com/get-started).

### Running the app

Clone the repository:
```
git clone https://github.com/Siziii/Calendar-Commits-App
```
Navigate to the project directory:
```
cd Calendar-Commits-App
```
Build and start the containers with the following command:
```
docker-compose up
```

## Getting Started Locally (Without Docker)

### Prerequisites

Before running the project locally without Docker, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Download npm](https://www.npmjs.com/get-npm)
- Git: [Download Git](https://git-scm.com/downloads)

### Getting Started

Clone the repository:
```
git clone https://github.com/Siziii/Calendar-Commits-App
```
Navigate to the project directory:
```
cd Calendar-Commits-App
```
Install the project dependencies using npm:
```
npm install
```
Once the dependencies are installed, you can start the development server:
```
npm run dev
```
Access the website in your web browser at: [http://localhost:3000/](http://localhost:3000/)

## Usage

1. Access the Application:
    - Open your web browser and visit the application at [https://commit-calendar.vercel.app/](https://commit-calendar.vercel.app/).
    - If you're running the application locally, use [http://localhost:3000](http://localhost:3000).

2. Fetch Repository Data:
    - On the application's interface, you'll see input fields for the repository's author and name.
    - Enter the repository author and name (e.g., 'Sizi' and 'Calendar-Commits-App').
    - Click the 'Fetch' button to retrieve the repository's commit data.

3. Explore the Calendar:
    - Dates with commits are highlighted in blue.
    - Hover over a highlighted date to see the number of commits made on that day.

4. View Commit Details:
    - To view detailed commit information, click on a highlighted date.
    - A list of commits made on the selected date will be displayed.
    - Each commit entry includes the Author name, Author email, Commit message, Commit time, SHA and button to access the complete commit details on GitHub.


