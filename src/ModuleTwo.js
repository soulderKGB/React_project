function ModuleTwo(props){
return(
<div> 
<br/><br/>
<section id="ModuleTwo">

    <div id="leftContent">
    <h2>Working together to create jobs for our communities</h2>
    <p>We're partnering with schools and local employers to build skills, increase hiring, and fuel economic opportunity.</p>
    </div>
    <div>
  <img id="rightContent" src={props.poster1}/> 
    </div>
</section>
</div>

);
}

export default ModuleTwo;