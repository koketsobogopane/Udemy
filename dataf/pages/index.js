import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const data =  await getFeaturedEvents()

  return {
    props: {
      featuredEvents: data
    }, // will be passed to the page component as props
    revalidate: 1800
  }
} 

export default HomePage;
