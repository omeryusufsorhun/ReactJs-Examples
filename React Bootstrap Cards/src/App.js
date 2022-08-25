import { useState } from "react";
import "./index.css";
import Card from "react-bootstrap/Card";

export default function App() {
  const cardInfo = [
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "omer",
      text: "bişiler",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "yusuf",
      text: "yazı",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "yusuf",
      text: "yazılar",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "sorhun",
      text: "bişibişiler",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return <>{cardInfo.map(renderCard)}</>;
}
