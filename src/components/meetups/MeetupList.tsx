import MeetupItem from './MeetupItem';

import { MeetupType } from '@/types/types';

type MeetupListProps = {
  meetups: MeetupType[];
};

const MeetupList = (props: MeetupListProps) => (
  <ul className='m-0 list-none p-0'>
    {props.meetups.map((meetup) => (
      <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
      />
    ))}
  </ul>
);
export default MeetupList;
