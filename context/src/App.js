import { memo, useCallback, useState } from "react";
/* 
useMemo => expensive computation usememo, memoization caching result lai store
memo => saves unusal re-render of child component if same props are passed
useCallback => freezes or make copy of the fun at that moment */
export default function MyApp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeName = useCallback(() => {
    console.log("I am change func");
  },[name]);
  return (
    <>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} handleChangeName={handleChangeName} />
    </>
  );
}

const Greeting = memo(function Greeting({ name, handleChangeName }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <>
      <h3>
        Hello{name && ", "}
        {name}!
      </h3>
      <button onClick={handleChangeName}>Click Me</button>
    </>
  );
});
