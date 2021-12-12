import './App.css';

const numbers = [2, 4, 6, 8];

const ListItems = () => {
    const items = numbers.map((item) => {
        return <li key={item}>{item}</li>
    });

    return <ul>{items}</ul>
}

const App = () => {
    return <ListItems />
}

export default App;