//styling
import "../styles/MovieCard.css";

//hooks
import React, { useContext } from "react";

//context
import MovieContext from "../context/MovieContext";

//components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  
  const { myList, setmyList } = useContext(MovieContext);
  const { title, posterUrl } = props.movie;

  return (
    <>
      <Card
        style={{ border: "none", boxShadow: "none", background: "transparent" ,Padding:"0px" }}
        sx={{ maxWidth: 132 }}
      >
        <div
          className="addTag"
          onClick={ () => {
            if (props.tag === "Add +") {
              if (!myList.includes(props.movie)) {
                setmyList((prevList) => [...prevList, props.movie]);
                setTimeout(function() {
                  alert("Movie Has Been Added to watched List");
              }, 0);
              } 
              else{
                alert("Movie is Already in the Watched List");
              }
            }
            else {
              const newlist = myList.filter(
                (movies) => movies !== props.movie
              );
              setmyList(newlist);
              setTimeout(function() {
              alert("The movie Has Been Removed From Watched List");
            }, 0);
            }
          }}
        >
          {props.tag}
        </div>
        <Link
          style={{ textDecoration: "none" }}
          to={`/MovieDetails/${props.movie.title}`}
        >
          <CardMedia
            style={{ borderRadius: "16px" }}
            component="img"
            alt="green iguana"
            height="200"
            image={posterUrl}
          />
          <CardContent sx={{ borderBlock: "none" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
