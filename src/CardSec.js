function CardSec(props){
    return(
        <div> 
           <div> <h1>{props.CardName}</h1>
        <img src={props.ImageName}/>
          <p>{props.CardInfo}<br/>
          {props.CardDetails}<br/>
          {props.CardDetails2}<br/>
          </p>
         </div>

      </div>

    );
}

export default CardSec;