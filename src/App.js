import "./App.css";
import UserForm from "./components/UserForm";

function App() {
    return (
        <div className="app">
            <div>
                <h1 className="title">GitHub User Search</h1>
                <UserForm />
            </div>
        </div>
    );
}

export default App;
