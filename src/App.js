import './App.css';

const handleClick = (e) => {
    console.log(e.target.value);
}

const SampleButton = () => {
    return (
        <>
            <input type="button" value="ボタン" onClick={handleClick} />
            <input type="text" defaultValue="" onChange={handleClick} />
        </>
    );
};

const App = () => {
    return <SampleButton />
}

export default App;