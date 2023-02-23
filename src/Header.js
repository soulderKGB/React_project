function Header(props){
    return(
        <div> 
             <header> 
        <img id="siblogo" src={props.imageName} alt="SIB"/>
        <br/>
          <nav id="nav1">
              <br/>
              <a rel="Click here" href="">Checking</a>
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