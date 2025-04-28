import './App.css';
import Profile from './components/Profile';
import UserLogin from './components/UserLogin';
import UserContexProvider from './context/UserContexProvider';
import TheamContextProvider from './context/TheamContextProvider';
import ThemeToggler from './components/ThemeToggler';

function App() {
    return (
        // <UserContexProvider>
        //     <h1>Hello World</h1>
        //     <UserLogin />
        //     <Profile />
        // </UserContexProvider>
        <TheamContextProvider>
            <ThemeToggler/>
        </TheamContextProvider>
    );
}

export default App;
