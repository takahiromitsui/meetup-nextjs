/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

type MeetupDetailProps = {
  image: string;
  title: string;
  address: string;
  description: string;
};

const MeetupDetail = (props: MeetupDetailProps) => {
  return (
    <Fragment>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Fragment>
  );
};
export default MeetupDetail;
