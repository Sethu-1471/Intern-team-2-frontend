import "./PaymentEnroll.css";
import Comp1 from "../Payment/Comp1";
import Comp2 from "../Payment/Comp2";
import Comp3 from "../Payment/Comp3";
import Comp4 from "../Payment/Comp4";
import Comp5 from "../Payment/Comp5";

function PaymentEnroll() {
  return (
    <div className="App">
      <Comp1 />
      <Comp2 />
      {/* <Comp3 /> */}
      <Comp4 />
      <Comp5 />
    </div>
  );
}

export default PaymentEnroll;
