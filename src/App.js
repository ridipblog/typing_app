// import logo from "./logo.svg";
import "./App.css";
import TextApp from "./components/TextApp/TextApp";
function App() {
  const TextAppProps = {
    title: "Text App",
    place: "Enter Text To Count Place",
  };
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod bibendum sapien, eget vestibulum ipsum venenatis eu. Cras vel tortor ut justo bibendum feugiat. Nulla facilisi. Vestibulum nec quam elit. Praesent posuere libero nec libero cursus, at venenatis purus semper. Integer eget urna id purus euismod aliquam. Vestibulum bibendum mauris vel turpis feugiat, in sagittis elit efficitur.Suspendisse eget augue sit amet purus lacinia venenatis. Quisque nec feugiat enim, ut viverra sapien. Fusce eu facilisis nisl. Nullam volutpat diam quis fermentum auctor. Duis vulputate bibendum urna, id egestas dolor. Sed convallis ex vel libero congue, a lacinia neque cursus. Proin vel metus nec lectus varius mattis. Vivamus convallis, est in luctus vulputate, lectus odio lacinia velit, eu lacinia orci tortor id libero.Vestibulum euismod elit ut justo tristique, eget interdum metus vehicula. Sed ac varius odio";
  return (
    <>
      <TextApp TextAppProps={TextAppProps} dummyTextProps={dummyText} />
    </>
  );
}

export default App;
