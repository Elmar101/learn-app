import React, { useState } from 'react'
import useUpdateEffectTest from './useUpdateEffectTest';

const TestUseUpdateEffectHooks = () => {
  const [state, setState] = useState<string>("");
  const [stateOne, setStateOne] = useState<string>("");
  useUpdateEffectTest(() => {
    setState("Aza");
    console.log("qqq");
  }, [state]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateOne(e.target.value);
  };
    return (
        <div className="App">
          <input
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
          <br/>
          <input
            value={stateOne}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeOne(e)}
          />
        </div>
      );
}

export default TestUseUpdateEffectHooks