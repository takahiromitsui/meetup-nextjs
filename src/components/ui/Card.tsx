type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => (
  <div className='rounded-md bg-white shadow-md'>{props.children}</div>
);
export default Card;
