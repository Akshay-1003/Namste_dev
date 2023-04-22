const ele   = React.createElement('h1',{id:'title'},'The React is going to Render');
console.log(ele)
const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(ele);