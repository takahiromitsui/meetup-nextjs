import Navigation from "./Navigation";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => (
  <div>
    <Navigation/>
    <main className='my-12 mx-auto w-11/12 max-w-2xl'>{props.children}</main>
  </div>
);
export default Layout;
