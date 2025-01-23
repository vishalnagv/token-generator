import React, { useEffect, useState } from "react";
// import { TextInput } from "../../../form_components/FormComponents";

const Heartland = (props) => {
  const { publicKey } = props;
  const [accountHolderName, setAccountHolderName] = useState("");
  const [country, setCountry] = useState("USA");
  const [postal, setPostal] = useState("");
  const color = "#428df5";
  const [address1, setAddres1] = useState("");
  const [address2, setAddres2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("WA");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const testEnabled = true;

  useEffect(() => {
    if (window.Heartland) {
      // Create a new `HPS` object with the necessary configuration
      const hpsObject = new window.Heartland.HPS({
        publicKey: publicKey,
        type: "iframe",
        env: testEnabled ? "cert" : "prod",
        // Configure the iframe fields to tell the library where
        // the iframe should be inserted into the DOM and some
        // basic options
        fields: {
          cardNumber: {
            target: "iframesCardNumber",
            placeholder: "•••• •••• •••• ••••",
          },
          cardExpiration: {
            target: "iframesCardExpiration",
            placeholder: "MM / YYYY",
          },
          cardCvv: {
            target: "iframesCardCvv",
            placeholder: "CVV",
          },
          submit: {
            value: "Generate Token",
            target: "iframesSubmit",
          },
        },
        // Collection of CSS to inject into the iframes.
        // These properties can match the site's styles
        // to create a seamless experience.
        style: {
          input: {
            background: "#fff",
            border: "5px solid",
            "border-color": "#bbb3b9 #c7c1c6 #c7c1c6",
            "box-sizing": "border-box",
            "font-family": "serif",
            "font-size": "16px",
            "line-height": "1",
            margin: "0 .5em 0 0",
            "max-width": "100%",
            outline: "0",
            padding: "0.5278em",
            "vertical-align": "baseline",
            height: "10px",
            width: "100%",
          },
          "#heartland-field": {
            "font-family": "sans-serif",
            "box-sizing": "border-box",
            display: "block",
            height: "40px",
            width: "100%",
            padding: "6px 12px",
            "font-size": "14px",
            "line-height": "1.42857143",
            color: "#555",
            "background-color": "#fff",
            border: "1px solid #ccc",
            "border-radius": "0px",
            "-webkit-box-shadow": "inset 0 1px 1px rgba(0,0,0,.075)",
            "box-shadow": "inset 0 1px 1px rgba(0,0,0,.075)",
            "-webkit-transition":
              "border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s",
            "-o-transition":
              "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
            transition:
              "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
          },
          "#heartland-field[name=submit]": {
            "background-color": color,
            "font-family": "sans-serif",
            "text-transform": "uppercase",
            "border-radius": "20px",
            color: "#ffffff",
            border: "0px solid transparent",
            width: "35%",
            height: "38px",
          },
          "#heartland-field[name=submit]:focus": {
            color: "#ffffff",
            "background-color": color,
            outline: "none",
          },
          "#heartland-field[name=submit]:hover": {
            "background-color": color,
          },
          "#heartland-field-wrapper #heartland-field:focus": {
            border: `1px solid ${color}`,
            outline: "none",
            "box-shadow": "none",
            height: "40px",
          },
          "heartland-field-wrapper #heartland-field": {
            height: "40px",
          },
          "input[type=submit]": {
            "box-sizing": "border-box",
            display: "inline-block",
            padding: "6px 12px",
            "margin-bottom": "0",
            "font-size": "14px",
            "font-weight": "400",
            "line-height": "1.42857143",
            "text-align": "center",
            "white-space": "nowrap",
            "vertical-align": "middle",
            "-ms-touch-action": "manipulation",
            "touch-action": "manipulation",
            cursor: "pointer",
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
            "background-image": "none",
            border: "1px solid transparent",
            "border-radius": "4px",
            color: "#fff",
            "background-color": "#337ab7",
            "border-color": "#2e6da4",
          },
          "#heartland-field[placeholder]": {
            "letter-spacing": "3px",
          },
          "#heartland-field[name=cardCvv]": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/cvv1.png?raw=true) no-repeat right',
            "background-size": "63px 40px",
          },
          "input#heartland-field[name=cardNumber]": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-inputcard-blank@2x.png?raw=true) no-repeat right',
            "background-size": "55px 35px",
          },
          "#heartland-field.invalid.card-type-visa": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-visa@2x.png?raw=true) no-repeat right',
            "background-size": "83px 88px",
            "background-position-y": "-44px",
          },
          "#heartland-field.valid.card-type-visa": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-visa@2x.png?raw=true) no-repeat right top',
            "background-size": "82px 86px",
          },
          "#heartland-field.invalid.card-type-discover": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-discover@2x.png?raw=true) no-repeat right',
            "background-size": "85px 90px",
            "background-position-y": "-44px",
          },
          "#heartland-field.valid.card-type-discover": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-discover@2x.png?raw=true) no-repeat right',
            "background-size": "85px 90px",
            "background-position-y": "1px",
          },
          "#heartland-field.invalid.card-type-amex": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-savedcards-amex@2x.png?raw=true) no-repeat right',
            "background-size": "50px 90px",
            "background-position-y": "-44px",
          },
          "#heartland-field.valid.card-type-amex": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-savedcards-amex@2x.png?raw=true) no-repeat right top',
            "background-size": "50px 90px",
          },
          "#heartland-field.invalid.card-type-mastercard": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-mastercard.png?raw=true) no-repeat right',
            "background-size": "62px 105px",
            "background-position-y": "-52px",
          },
          "#heartland-field.valid.card-type-mastercard": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-mastercard.png?raw=true) no-repeat right',
            "background-size": "62px 105px",
            "background-position-y": "-1px",
          },
          "#heartland-field.invalid.card-type-jcb": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-jcb@2x.png?raw=true) no-repeat right',
            "background-size": "55px 94px",
            "background-position-y": "-44px",
          },
          "#heartland-field.valid.card-type-jcb": {
            // background:
            //   'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-jcb@2x.png?raw=true) no-repeat right top',
            "background-size": "55px 94px",
            "background-position-y": "2px",
          },
          "input#heartland-field[name=cardNumber]::-ms-clear": {
            display: "none",
          },
        },
        // Callback when a token is received from the service
        onTokenSuccess: (resp) => {
          setToken(resp.token_value);
          setError("");
        },
        onTokenError: (resp) => setError(resp.error.message),
      });

      return () => {
        hpsObject && hpsObject.dispose();
      };
    } else {
      setError("Heartland couldn't be loaded.");
      console.log("Heartland couldn't be loaded.");
    }
  }, []);

  const copyToClipboard = () => {
    let textField = document.createElement('textarea')
    textField.innerText = token
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {window.Heartland && (
        <div className="form-wrapper">
          <form id="iframes" action="" method="GET">
            <div>
              <div>
                <label
                  htmlFor="iframesCardNumber"
                  className="black-label iframe"
                >
                  Card Number
                  <span className="required-field-star">*</span>
                </label>
                <div id="iframesCardNumber" style={{ marginTop: "-15px" }} />
              </div>

              <div>
                <label htmlFor="iframesCardExpiration">
                  <p className="black-label iframe">
                    Card Expiration
                    <span className="required-field-star">*</span>
                  </p>
                </label>
                <div id="iframesCardExpiration" />
              </div>
              <div>
                <label htmlFor="iframesCardCvv">
                  <p className="black-label iframe">
                    Card CVV
                    <span className="required-field-star">*</span>
                  </p>
                </label>
                <div id="iframesCardCvv" />
              </div>

              {/* <div className="flex expand">
                <div style={{ marginRight: "8px", flex: 1 }}>
                  <TextInput
                    fullWidth
                    required
                    className="m-t-10"
                    label="Card Holder Name"
                    variant="outlined"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <TextInput
                    fullWidth
                    required
                    className="m-t-10"
                    label="Postal Code"
                    variant="outlined"
                    placeholder="12345"
                    value={accountHolderName}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </div>
              </div> */}
            </div>
            <br />

            <div id="iframesSubmit" style={{ width: "30%" }} />

            {token && <textarea value={token} disabled />}
            {token && <button onClick={() => copyToClipboard()}>Copy token</button>}

            <button className="button" onClick={() => props.onCancel()}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Heartland;
