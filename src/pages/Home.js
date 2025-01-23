import React, { useState } from "react";

const Home = (props) => {
  const { token, setToken, goTo, cvv, setCvv } = props;
  const [gateway, setGateway] = useState("");

  console.log(cvv);

  return (
    <>
      <p>Which gateway are you looking for?</p>
      <select
        name="gateways"
        id="gateways"
        className="select"
        selected={token}
        onChange={(e) => setGateway(e.target.value)}
      >
        <option value="heartland">Heartland</option>
        <option value="cardconnect">CardConnect</option>
      </select>
      {gateway === "heartland" && (
        <div>
          <p>Enter token</p>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="textarea"
          />
          {token && (
            <button className="button" onClick={() => goTo(`/heartland`)}>
              GO!
            </button>
          )}
        </div>
      )}
      {gateway === "cardconnect" && (
        <div>
          <input
            type="checkbox"
            value={cvv}
            checked={cvv}
            onChange={() => setCvv(!cvv)}
          ></input>
          <label style={{ fontSize: "12px" }}>Do you want to enter CVV?</label>
          <br/>
          <button className="button" onClick={() => goTo(`/cardconnect`)}>
            GO!
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
