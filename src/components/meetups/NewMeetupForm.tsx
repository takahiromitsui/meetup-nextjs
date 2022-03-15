import Card from '../ui/Card';

const NewMeetupForm = () => {
  return (
    <Card>
      <form className='p-4'>
        <div className='mb-2'>
          <label className='mb-2 inline-block font-bold' htmlFor='title'>
            Meetup Title
          </label>
          <input
            className='inline-block w-full rounded border-slate-400 p-1'
            type='text'
            required
            id='title'
          />
        </div>
        <div className='mb-2'>
          <label className='mb-2 inline-block font-bold' htmlFor='image'>
            Meetup Image
          </label>
          <input
            className='inline-block w-full rounded border-slate-400 p-1'
            type='url'
            required
            id='image'
          />
        </div>
        <div className='mb-2'>
          <label className='mb-2 inline-block font-bold' htmlFor='address'>
            Address
          </label>
          <input
            className='inline-block w-full rounded border-slate-400 p-1'
            type='text'
            required
            id='address'
          />
        </div>
        <div className='mb-2'>
          <label className='mb-2 inline-block font-bold' htmlFor='description'>
            Description
          </label>
          <textarea
            className='inline-block w-full rounded border-slate-400 p-1'
            required
            id='description'
            rows={5}
          ></textarea>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
