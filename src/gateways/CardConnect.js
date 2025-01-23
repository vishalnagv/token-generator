import React, { useEffect, useRef, useState } from "react";
import { gatewayConfig } from "./constants";

const CardConnect = (props) => {
  const acceptCvv = props.cvv;
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const renderStyle = () => {
    let style = {
      position: "relative",
      width: 100 + "%",
      height: 40 + "px",
      clear: "both",
      iframeHeight: "100px",
    };
    if (acceptCvv) {
      style.height = 150 + "px";
      style.iframeHeight = "150px";
    }
    return style
  };
  let style = renderStyle();
  const url = acceptCvv
    ? gatewayConfig.cardConnectCCWithCVVTestUrl
    : gatewayConfig.cardConnectCCTestUrl;

  useEffect(() => {
    // Payment.formatCardExpiry(expiryRef);
    window.addEventListener(
      "message",
      function (event) {
        try {
          let token = JSON.parse(event.data);
          if (token.validationError !== undefined) {
            setError(token.validationError);
          } else {
            setError(null);
            setToken(token.message);
          }
        } catch (e) {}
      },
      false
    );
  }, []);

  const renderCardConnectIframe = () => {
    return (
      <div style={style}>
        <iframe
          id="tokenframe"
          name="tokenframe"
          src={url}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height={style.iframeHeight}
        />
      </div>
    );
  };

  const renderNoCvvLayout = () => {
    return (
      <div fullspan="true">
        <div className="control-label">
          Card Number <span className="required-field-star">*</span>
        </div>
        {renderCardConnectIframe(style)}
      </div>
    );
  };

  const renderAcceptCvvLayout = () => {
    return <div fullspan="true">{renderCardConnectIframe(style)}</div>;
  };

  const copyToClipboard = () => {
    let textField = document.createElement("textarea");
    textField.innerText = token;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button className="button" onClick={() => props.onCancel()}>
        Cancel
      </button>
      {acceptCvv ? renderAcceptCvvLayout() : renderNoCvvLayout()}
      <br/>
      {token && <textarea value={token} disabled />}
      <br/>
      {token && <button onClick={() => copyToClipboard()}>Copy token</button>}
    </div>
  );
};

export default CardConnect;
