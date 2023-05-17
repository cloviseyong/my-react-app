import{Outlet,link} from "react-router-dom";

const Layout =() => {
  return(
    <>
    <nav>
      <ul>
        <li>
          <link to = "/Home">Home</link>
        </li>
        <li>
          <link to = "/Blogs">Blogs</link>
        </li>
        <li>
          <link to = "/Contact">Contact</link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
};
export default Layout;