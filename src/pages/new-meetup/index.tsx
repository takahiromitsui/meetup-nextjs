import Head from 'next/head';
import { Fragment } from 'react';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

import { MeetupType } from '../../types/types';

const NewMeetupPage = () => {
  // eslint-disable-next-line
  const addMeetupHandler = async (enteredMeetupData: MeetupType) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  };
  return (
    <Fragment>
      <Head>
        <title>Meetup App</title>
        <meta name='description' content='Add your new Meetup' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
