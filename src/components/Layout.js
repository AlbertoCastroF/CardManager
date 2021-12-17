import NavBar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}
