import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
function RenderComments({ comments }) {
  if (comments != null) {
    const commentary = comments.map((element) => {
      return (
        <li key={element.id}>
          <p>{element.comment}</p>
          <p>
            --{element.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(element.date)))}
          </p>
        </li>
      );
    });
    return commentary;
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  if (props.dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              <RenderComments comments={props.dish.comments} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default DishDetail;
