# SHE Choir London

In-progress redesign of the SHE Choir London website (https://www.shechoir.com/london) by Sophie Koonin.

## Stack

- Wordpress as a headless CMS (why? because it's easier to use for the non-techies out there, and it's free)
- Node + React frontend built using Gatsby and hosted on Netlify (tbc)

## Getting to work
Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Then you can run it by:

```sh
cd she-choir
gatsby develop
```

You'll need an `.env.development` file in the project root directory with the environment variables `GCAL_API_KEY` and `GCAL_ID` for Google Calendar for the calendar to work locally.
