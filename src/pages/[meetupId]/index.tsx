import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

import MeetupDetail from '@/components/meetups/MeetupDetail';

import { MeetupType } from '@/types/types';

const MeetupDetails = (props: MeetupType) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
      </Head>
      <MeetupDetail
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
};
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
  client.close();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};
// Get Detail page info dynamically
export const getStaticProps = async (context: {
  params: { meetupId: string };
}) => {
  const meetupId = context.params?.meetupId;
  // fetch data
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.vnelg.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  // fetch one meetup
  const selectedMeetup = await meetupsCollection.findOne({
    // Select by Mongodb ObjectId
    _id: new ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      id: selectedMeetup?._id.toString(),
      title: selectedMeetup?.title,
      address: selectedMeetup?.address,
      image: selectedMeetup?.image,
      description: selectedMeetup?.description,
    },
  };
};
