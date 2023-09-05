import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/eventComponents/EventList'
import EventSearch from '../../components/eventComponents/EventSearch'
import { Fragment } from 'react'
import { useRouter } from 'next/router'

export default function EventsPage() {

  const router = useRouter()
  const events = getAllEvents()

  function findEventsHandler( year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSearch onSearch= {findEventsHandler} />
        <EventList items= {events} />
    </Fragment>
  )
}
