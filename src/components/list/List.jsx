import "./list.scss";
import { featuredPortfolio } from "../../../data";
import CardGrid from "../cardGrid/CardGrid";

function List({ posts }) {
  return (
    <div className="list">
      {featuredPortfolio.map((item) => (
        <CardGrid key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
