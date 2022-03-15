import NewMeetupForm from '@/components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  // eslint-disable-next-line
  const addMeetupHandler = (enteredMeetupData:any) => {
    // eslint-disable-next-line no-console
    console.log(enteredMeetupData)
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
};

export default NewMeetupPage;
