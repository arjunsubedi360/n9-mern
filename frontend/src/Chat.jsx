import { useEffect, useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //     <button onClick={() => setCount(0)}>Reset</button>
  //   </div>
  // );

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}
