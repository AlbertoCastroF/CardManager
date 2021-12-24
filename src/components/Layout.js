import NavBar from "./Navbar";

export default function Layout(props) {
  return (
    // THIS COMPONENT WILL BE THE NAVBAR FOR ALL PAGES
    <>
      <NavBar />
      {props.children}
    </>
  );
}
