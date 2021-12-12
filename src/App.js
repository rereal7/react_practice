import './App.css';
// import React, {useState} from 'react';

const Hello = () => {
    const isReact = true;

    return (
        <>
            <p>
                {(() => {
                    if (isReact) {
                        return "Hello React!1";
                    }else{
                        return "Hello Something!1";
                    }
                })()}
            </p>
            <p>
                {(function() {
                    if (!isReact) {
                        return "Hello React!2";
                    }else{
                        return "Hello Something!2";
                    }
                }())}
            </p>
            <p>{isReact ? "Hello, React!3" : "Hello Something!3"}</p>
            <p>{isReact && "Hello, React!4"}</p>
            <p>{isReact || "Hello, React!5"}</p>
        </>
    )
}

const App = () => {
    return <Hello />
}

export default App;