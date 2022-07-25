import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState } from "react";
import KnowMoreModal from "./Modal";
import nextImage from "../assets/next.png";

function CardComponent(props){
   let [triggerModal,setTriggerModal] = useState(false);

    return(
        <>
        <Card style={{ maxWidth: '18rem' }}>
        <Card.Img variant="top" src={props.data.img} />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
      {props.data.desc}
          </Card.Text>
          <div className="cardButtonsContainer">
          <Button variant="primary" className="cardKnowMoreButton" onClick={()=>setTriggerModal(true)}>Know more
          <span><img className="nextIcon" src={nextImage} alt="" srcset="" /></span>
          </Button>
          <Button variant="primary">Register</Button> 
          </div>
        </Card.Body>
      </Card>

      <KnowMoreModal 
              show={triggerModal}
              onHide={() => setTriggerModal(false)}
              />
      </>
    )
}

export default CardComponent;