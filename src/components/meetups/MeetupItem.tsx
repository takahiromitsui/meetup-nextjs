import Card from '../ui/Card';

export type MeetupItemProps = {
  id: string;
  image: string;
  title: string;
  address: string;
};

const MeetupItem = (props: MeetupItemProps) => (
  <li className='my-4'>
    <Card>
      <div className='h-80 w-full overflow-hidden rounded-tl-lg rounded-tr-lg'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='w-full object-cover'
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className='p-4 text-center'>
        <h3 className='text-xl text-black'>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className='p-6 text-center'>
        <button className='inline-block rounded border-2 border-blue-400 px-6 py-2 text-xs font-medium uppercase leading-tight text-blue-400 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0'>
          Show Details
        </button>
      </div>
    </Card>
  </li>
);
export default MeetupItem;
