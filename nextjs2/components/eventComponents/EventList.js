import classes from './EventList.module.css'

import EventItem from "./EventItem"

export default function EventList(props) {
    const { items } = props

  return (
    <ul className={classes.list}>
        {items.map(eventElement => (
            <EventItem 
               key= {eventElement.id}
               id= {eventElement.id}
               title= {eventElement.title}
               location= {eventElement.location}
               date= {eventElement.date}
               image= {eventElement.image}

            />
        ))}
    </ul>
  )
}
