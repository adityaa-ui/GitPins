import './Landingpage.css'
import { CiSearch } from "react-icons/ci";
function Landingpage(){
    return(
        <div className="upper">
  <nav className="navbar">

    <div className="left">
      <h2>GitPins</h2>

      <ul>
        <li>Explore</li>
        <li>Curators</li>
        <li>Boards</li>
        <li>Changelog</li>
      </ul>
    </div>

    <div className="upper2">
        <div className="search-box">
            <CiSearch className="search-icon" />
      <input type="text" placeholder=" Search Repositories" />
      </div>
      <button>Sign Up</button>
    </div>

  </nav>
</div>
    )
}
export default Landingpage;