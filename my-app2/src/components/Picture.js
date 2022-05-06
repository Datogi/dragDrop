import React from "react";
import { useDrag } from "react-dnd";
function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  document.querySelector(".Board")
    ? (document.querySelector(".Board").style = isDragging
        ? "background-color: yellow;"
        : console.log())
    : console.log();

  return (
    <div id={id}>
      <img
        ref={drag}
        src={url}
        width="150px"
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
    </div>
  );
}

export default Picture;
