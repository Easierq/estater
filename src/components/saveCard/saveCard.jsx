import "./saveCard.scss";
import trash from "../../icons/trash.svg";
import { Link, NavLink } from "react-router-dom";
import { formatPriceWithCommas } from "../../utils/helpers";

const SaveCard = ({ item }) => {
  return (
    <div className="item-save" key={item.id}>
      <div className="ab12">
        {/* <div className="ab1">
          <span>Featured</span>
        </div> */}
        <div className="ab2">
          <span>3 Bedroom Flat</span>
        </div>
      </div>
      <div className="close-wrap" onClick={() => {}}>
        <img className="close" src={trash} alt="menu-icon" />
      </div>
      <Link as={NavLink} to={`/properties/${item.id}`}>
        <div className="pic">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <div className="body">
          <div className="img-con">
            <img className="img" src={item.images[0]} alt={item.title} />
          </div>
          <div className="pt">
            <p className="title">{item.title}</p>
            <p className="price">$ {formatPriceWithCommas(item.price)}</p>
            {/* <p className="desc">{item.desc}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SaveCard;
