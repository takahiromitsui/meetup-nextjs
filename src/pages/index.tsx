import { MongoClient } from 'mongodb';
import { GetStaticProps } from 'next';

import MeetupList from '@/components/meetups/MeetupList';

import { MeetupType } from '../types/types';

type HomePageProps = {
  meetups: MeetupType[];
};

const HomePage = (props: HomePageProps) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps: GetStaticProps = async () => {
  // fetch data
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.vnelg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
