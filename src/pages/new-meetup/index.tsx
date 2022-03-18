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
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
