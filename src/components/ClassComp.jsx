import { Component } from "react";

// Ketu fillon Function Component

export function FunctionComp() {
  let fname = "Adrit";
  return (
    <>
      <h1> Pershendetje, {fname}</h1>
    </>
  );
}

// Ketu fillon Class Component
export default class ClassComp extends Component {
  fname = "Eron";

  render() {
    return (
      <>
        <h1>Pershendetje, {this.fname}</h1>
      </>
    );
  }
}
