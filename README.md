## flight-search-app

This is my case study for Amadeus' "Travel to Future" program.
This is a flight search app built using Next.js on the frontend and backend. It provides users with a platform to find an available flight to travel.

Please check my demo:
[Demo](https://flight-search-app-msc.vercel.app/)

## Information about data

**_I mostly created flight data for domestic flights of Turkey. If you want to see how listing seems you should search flights like:_**

### Flight data has been created for these date interval `27/08/2023 - 04/09/2023` Please search for these dates.

`IST > ASR`

`IST > ESB `

`AYT > IST`

## Features

- Search flight tickets
- List tickets
- Sort tickets by departure time, flight duration or price.

## Technologies Used

- Next.js
- Typescript
- Tailwind CSS
- Other dependencies can be found in the package.json file.

_On the backend of the app:_

I have created mock data using _mockaroo_, found database of airports and served these datas within my Next.js project.

## Installation

- Clone the repository: `git clone https://github.com/mscankat/flight-search-app.git`
- Navigate to the project directory: `cd flight-search-app`
- Install dependencies: `npm install`
- Create env file from example `cp ./.env.example .env` or `cp .env.example .env`

## Running The App

- Start the development server: `npm run dev`
- Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.
