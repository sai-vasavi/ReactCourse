const heading1 = React.createElement("h1", { id: "heading1" }, "Namasthe");
const heading2 = React.createElement("h2", { id: "heading2" }, "React");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element to the root its modifing the reactDom
root.render(container);
