import { FormEvent, useRef } from 'react';

import Card from '../ui/Card';

type NewMeetupFormProps = {
  // eslint-disable-next-line
  onAddMeetup(enteredData: any): any;
};

const NewMeetupForm = (props: NewMeetupFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;
    const data = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(data);
  };

  return (
    <Card>
      <form className='p-4' onSubmit={submitHandler}>
        <div className='mb-2'>
          <label className='mb-2 inline-block font-bold' htmlFor='title'>
            Meetup Title
          </label>
          <input
            className='inline-block w-full rounded border-slate-400 p-1'
            type='text'
            required
            id='title'
            ref={titleInputRef}
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
            ref={imageInputRef}
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
            ref={addressInputRef}
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
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
export default NewMeetupForm;
