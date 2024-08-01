import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function ContextComponent() {
    const [value, setValue] = useState('dark')
    function changeValueFun(){
        setValue("light")
    }
  return (
    <ThemeContext.Provider value={{value: "dark", changeValueFun: changeValueFun}}>
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const {value} = useContext(ThemeContext);
  console.log("theme", theme);
  
  const className = 'panel-' + value;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const {value,changeValueFun } = useContext(ThemeContext);
  const className = 'button-' + value;
  return (
    //button-dark
    <button className={className}>
      {children}
    </button>
  );
}
