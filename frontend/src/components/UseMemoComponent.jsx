import { useMemo, useState } from "react";

const UseMeMoComponent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  console.time('expensive start');
  const calculation = useMemo(()=> expensiveCalculation(count),[count]);
  console.timeEnd('expensive end');

  //increment by 1 on every invoke
  const increment = () => {
    setCount((count) => count + 1);
  };
  
  const addTodo = () => {
    setTodos((todo) => [...todo, "New Todo"]);
  };

  return (
    <div className="text-center">
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
       <div>
       <button onClick={increment}>+</button>
       </div>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMeMoComponent;