import './App.css';
import React, {useState} from 'react';

// ログアウトコンポーネント
const LogoutButton = (props) => {
    return <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
}
// ログインコンポーネント
const LoginButton = (props) => {
    return <button onClick={props.toggleIsLoggedIn}>ログイン</button>
}

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedInState] = useState(false);

    const toggleIsLoggedIn = () => {
        setIsLoggedInState(!isLoggedIn);
    }

    if (isLoggedIn) {
        return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
    }

    return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}

const App = () => {
    return <LoginControl />
}

export default App;