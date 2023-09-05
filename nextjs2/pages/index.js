import EventList from "../components/eventComponents/EventList";
import { getFeaturedEvents } from "../dummy-data"

export default function Homepage() {

    const featureEvents = getFeaturedEvents();

  return (
    <div>
        <EventList items= {featureEvents}/>
    </div>
  )
}
