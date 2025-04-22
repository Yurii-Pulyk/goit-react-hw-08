import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar></AppBar>
      {children}
    </div>
  );
}
