import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    image:
      'https://www.tripsavvy.com/thmb/VvaRvLCcafdpJcarRCtVfoDEoPM=/5323x3549/filters:fill(auto,1)/MuseumIsland-0fd599d4eccb4a3b9da13ac2af0f1325.jpg',
    title: 'The First Meetup',
    address: 'street1, some city',
  },
  {
    id: 'm2',
    image:
      'https://www.tripsavvy.com/thmb/VvaRvLCcafdpJcarRCtVfoDEoPM=/5323x3549/filters:fill(auto,1)/MuseumIsland-0fd599d4eccb4a3b9da13ac2af0f1325.jpg',
    title: 'The Second Meetup',
    address: 'street1, some city',
  },
];

const HomePage = () => <MeetupList meetups={DUMMY_DATA} />;

export default HomePage;
