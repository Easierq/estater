import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link, NavLink } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link as={NavLink} to={`/${item.id}`}>
              {item.title}
            </Link>
            <span className="span1">{item.bedroom} bedroom</span>
            <span className="span2">$ {item.price}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
