import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head'

function HomePage(props) {
  const { featuredEvents } = props;

  return (
    <div>
      <Head>
        <title>NextEvents</title>
        <meta 
          name= 'description'
          content='This is a simple app that shows the next events in your city.' 
          />
      </Head>
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
