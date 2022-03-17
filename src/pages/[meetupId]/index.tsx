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
  return {
    fallback: false, //only m1 and m2 will be preloaded
    paths: [
      {
        params: {
          //hardcoded now
          meetupId: 'm1',
        },
      },
      {
        params: {
          //hardcoded now
          meetupId: 'm2',
        },
      },
    ],
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
