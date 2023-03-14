import logo from './images/logo.png';
import { Link } from "react-router-dom";

function Header(props){
    return(
        <div> 
             <header> 
        <img id="siblogo" src={logo} alt="SIB"/>
        <br/>
          <nav id="nav1">
              <br/>
              <Link to ='/Dashboard'>Dashboard</Link>
              <a rel="Click here" href="">Savings</a>
              <a rel="Click here" href="">Credit Cards</a>
              <a rel="Click here" href="">Home loans</a>
              <a rel="Click here" href="">Auto Loans</a>
            </nav>
            </header> 
      </div>

    );
}

export default Header;