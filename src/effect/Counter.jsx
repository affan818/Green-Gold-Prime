import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Counter({ start, end }) {
  const [count, setCount] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        {count && (
          <h1
            className="text-success display-1"
            style={{ fontFamily: "cursive" }}
          >
            {" "}
            {/* Bootstrap classes */}
            <CountUp start={start} end={end} duration={2} delay={0} />+
          </h1>
        )}
      </ScrollTrigger>
    </>
  );
}

export default Counter;
