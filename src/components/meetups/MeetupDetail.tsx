/* eslint-disable @next/next/no-img-element */
import { MeetupType } from '@/types/types';

const MeetupDetail = (props: MeetupType) => {
  return (
    <section className='w-full text-center'>
      <img src={props.image} alt={props.title} />
      <h1 className='mt-4'>{props.title}</h1>
      <address className='mt-4'>{props.address}</address>
      <p className='mt-4'>{props.description}</p>
    </section>
  );
};
export default MeetupDetail;
