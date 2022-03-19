import { MongoClient } from 'mongodb';
import { GetStaticProps } from 'next';

import MeetupDetail from '@/components/meetups/MeetupDetail';

const MeetupDetails = () => (
  <MeetupDetail
    image='https://www.tripsavvy.com/thmb/VvaRvLCcafdpJcarRCtVfoDEoPM=/5323x3549/filters:fill(auto,1)/MuseumIsland-0fd599d4eccb4a3b9da13ac2af0f1325.jpg'
    title='The First Meetup'
    address='Some street'
    description='This is  first meetup'
  />
);
export default MeetupDetails;

export const getStaticPaths = async () => {
  // fetch data
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.vnelg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  // fetch all ids
  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.meetupId;
  return {
    props: {
      meetupData: {
        image:
          'https://www.tripsavvy.com/thmb/VvaRvLCcafdpJcarRCtVfoDEoPM=/5323x3549/filters:fill(auto,1)/MuseumIsland-0fd599d4eccb4a3b9da13ac2af0f1325.jpg',
        id: id,
        title: 'The First Meetup',
        address: 'Some street',
        description: 'This is  first meetup',
      },
    },
  };
};
