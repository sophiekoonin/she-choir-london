import { getEvents } from '../../src/utils/calendar'

const response = {
  kind: 'calendar#events',
  etag: '"adsfasdf"',
  summary: 'SHE Choir London Gigs',
  updated: '2018-07-16T19:02:34.633Z',
  timeZone: 'Europe/London',
  accessRole: 'reader',
  defaultReminders: [],
  nextSyncToken: 'asdfdasf==',
  items: [
    {
      kind: 'calendar#event',
      etag: '"asdfadsf"',
      id: 'mylovelyid',
      status: 'confirmed',
      htmlLink: 'https://www.example.com',
      created: '2016-08-30T15:49:01.000Z',
      updated: '2016-12-12T16:08:44.359Z',
      summary: 'Super exciting event name',
      location: 'West Covina, California',
      creator: {
        email: 'someone@example.com',
        displayName: 'SHE Choir London'
      },
      organizer: {
        email: 'calendar@id',
        displayName: 'SHE Choir London Gigs',
        self: true
      },
      start: {
        dateTime: '2016-01-12T18:30:00Z'
      },
      end: {
        dateTime: '2016-01-12T19:30:00Z'
      }
    },
    {
      kind: 'calendar#event',
      etag: '"asdfadsf"',
      id: 'mylovelyid1',
      status: 'confirmed',
      htmlLink: 'https://www.example.com',
      created: '2016-08-30T15:49:01.000Z',
      updated: '2016-12-12T16:08:44.359Z',
      summary: 'Another event',
      location: 'Mordor',
      creator: {
        email: 'someone@example.com',
        displayName: 'SHE Choir London'
      },
      organizer: {
        email: 'calendar@id',
        displayName: 'SHE Choir London Gigs',
        self: true
      },
      start: {
        dateTime: '2016-03-13T18:30:00Z'
      },
      end: {
        dateTime: '2016-03-13T19:30:00Z'
      }
    },
    {
      kind: 'calendar#event',
      etag: '"asdfadsf"',
      id: 'mylovelyid2',
      status: 'confirmed',
      htmlLink: 'https://www.example.com',
      created: '2016-08-30T15:49:01.000Z',
      updated: '2016-12-12T16:08:44.359Z',
      summary: 'Something else',
      location: 'Alderaan',
      creator: {
        email: 'someone@example.com',
        displayName: 'SHE Choir London'
      },
      organizer: {
        email: 'calendar@id',
        displayName: 'SHE Choir London Gigs',
        self: true
      },
      start: {
        dateTime: '2016-05-14T18:30:00Z'
      },
      end: {
        dateTime: '2016-05-14T19:30:00Z'
      }
    }
  ]
}

describe('calendar', () => {
  it('should map the response items into a slimmed-down array of events', async () => {
    fetch.once(JSON.stringify(response))

    const events = await getEvents()
    expect(events).toMatchSnapshot()
  })

  it('should return an empty array if the fetch fails', async () => {
    fetch.once(JSON.stringify({ error: 'oh no' }))
    const events = await getEvents()

    expect(events).toEqual([])
  })
})
