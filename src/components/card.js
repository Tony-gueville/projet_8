import { Link } from "react-router-dom";
import dataList from "../data/db.json";

const Card = () => {
  return (
    <div className="card-container">
      <div className="cards">
        {dataList.map((location, index) => (
          <Link to={"/logement/" + location.id} key={index + " " + location.id}>
            <li className="card" key={index}>
              <img
                className="card-img"
                src={location.cover}
                alt={location.title + " de " + location.host.name}
              />
              <h2 className="card-title">{location.title}</h2>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
