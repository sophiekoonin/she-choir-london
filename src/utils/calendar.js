const { GCAL_API_KEY, GCAL_ID } = process.env
const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${GCAL_ID}/events?key=${GCAL_API_KEY}`

export const getEvents = async () => {
  const response = await fetch(calendarUrl)
  const items = response.body && response.body.items
  return items
    ? response.body.items.map(event => ({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary,
        location: event.location
      }))
    : []
}
