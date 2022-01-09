import "./styles.css";
function ComponentDelivery() {
  const delivery = {
    heading: `CHECK DELIVERY & SERVICES`,
    inputPincode: (
      <input placeholder="Enter Pincode" className="dl-pin-input"></input>
    ),
    checkButton: <button className="dl-check-btn">CHECK</button>,
    checkTg:
      "Please enter PIN code to check delivery time & Pay on Delivery Availability,",
    details: [
      "100% Original Products",
      "Pay on delivery might be available",
      "Easy 30 days returns and exchanges",
      "Try & Buy might be available"
    ]
  };

  let {
    heading,
    inputPincode: input,
    checkButton: button,
    checkTg: tag,
    details: [d1, d2, d3, d4]
  } = delivery;

  return (
    <>
      <div className="delivery-box">
        <div className="del-heading"> {heading}</div>
        <div className="input-pincode-box">
          <span>{input}</span>
          <span className="dl-btn">{button}</span>
          <div className="del-tag">{tag}</div>
        </div>
        <div className="delivery-condition-box">
          {delivery.details.map((item) => (
            <li className="dl-conditions">{item}</li>
          ))}
        </div>
      </div>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <ComponentDelivery />
    </div>
  );
}
