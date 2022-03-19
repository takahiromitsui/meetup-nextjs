import { MongoClient } from 'mongodb';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

import MeetupList from '@/components/meetups/MeetupList';

import { MeetupType } from '../types/types';

type HomePageProps = {
  meetups: MeetupType[];
};

const HomePage = (props: HomePageProps) => {
  return (
    <Fragment>
      <Head>
        <title>Meetup App</title>
        <meta
          name='description'
          content='Meetup App by React, Nextjs, Typescript, and TailwindCSS'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
