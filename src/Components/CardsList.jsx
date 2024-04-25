import { useContext } from "react";
import { Context } from "./Store";
import Cards from "./Cards";

function CardsList() {
  const { postList } = useContext(Context);
  return (
    <>
      {postList.map((post) => (
        <Cards key={post.id} post={post} />
      ))}
    </>
  );
}

export default CardsList;
