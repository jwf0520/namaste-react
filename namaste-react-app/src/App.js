const heading = React.createElement("h1", {id: "heading"}, "Hello World from React FU");
const root = ReactDOM.createRoot(document.getElementById("root"));

const innerChild1 = React.createElement("h1", {style: {color: "red" }}, "I'm an h1 element");
const innerChild2 = React.createElement("h2", {style: {color: "blue"}}, "I'm an h2 element");


const child1 = React.createElement("div", {id: "child1"}, [innerChild1, innerChild2]);
const child2 = React.createElement("div", {id: "child2"}, [innerChild1, innerChild2]);
const parent = React.createElement("div", {id: "parent"}, [child1, child2]);

//root.render(heading);
root.render(parent);
