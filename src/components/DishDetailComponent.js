import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {
  renderComments(comments) {
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
  render() {
    if (this.props.dish == null) {
      return <div></div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              <ul className="list-unstyled">
                {this.renderComments(this.props.dish.comments)}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default DishDetail;
