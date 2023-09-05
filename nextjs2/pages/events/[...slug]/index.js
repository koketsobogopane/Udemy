import { useRouter } from "next/router"
import { Fragment } from "react";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/eventComponents/EventList";
import ResultsTitle from '../../../components/eventComponents/results-title'
import Button from "../../../components/ui/button";
import ErrorAlert from '../../../components/eventComponents/error-alert'

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterdata = router.query.slug
  if (!filterdata){
    return (<p className="center"> Loading...</p>)
  }

  const filteredYear = filterdata[0]
  const filteredMonth = filterdata[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if ( isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numMonth < 1 || numMonth > 12) {
    return(<Fragment>
      <ErrorAlert><p>Ivalid filter. Please adjust your values!</p></ErrorAlert>
      
      <div className="center"><Button link= "/events"> Show All Events</Button></div>
      </Fragment>);
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if (!filteredEvents || filteredEvents.length === 0 ){
    return <Fragment>
      <ErrorAlert><p>No Events found for the chosen filter!</p></ErrorAlert>
      
      <div className="center"><Button link= "/events"> Show All Events</Button></div>
      </Fragment>
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
        <ResultsTitle date={date} />
        <EventList items= {filteredEvents} />
        </Fragment>
  )
}
