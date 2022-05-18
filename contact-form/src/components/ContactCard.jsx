import { useState } from "react";
import "./ContactCard.css";

export default function ContactCard(props) {
  const { first_name, last_name, email, image, phone } = props;
  const [isActive, setActive] = useState(true);

  return (
      <div className="container">
        <div className="imagee">
          <img src={image} alt="" />
        </div>
        <div className="data">
          <h2>
            {first_name} {last_name}
          </h2>
          <h4>{email}</h4>
          <div className="data-show">
            {isActive ? (
              <div onClick={() => setActive(!isActive)}>Click to show more</div>
            ) : (
              <div onClick={() => setActive(!isActive)}>{phone}</div>
            )}
          </div>
        </div>
      </div>
  );
}
