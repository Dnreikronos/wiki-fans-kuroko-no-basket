import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import RenderDetailsCharacters from "./RenderDetailsCharacters";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TitlebarImageList() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/")
      .then((res) => {
        console.log(res.data);
        setCharacterList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ImageList sx={{ width: 1450, height: 1000 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          className="items-center text-center bold"
        >
          Characters
        </ListSubheader>
      </ImageListItem>
      {characterList.map((character: any) => (
        <ImageListItem key={character.image}>
          <img
            srcSet={`${character.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${character.image}?w=248&fit=crop&auto=format`}
            alt={character.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={character.name}
            actionIcon={
              <Link state={{character: character}} to="/RenderDetailsCharacters">
                <Button >Test</Button>
              </Link> 
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

