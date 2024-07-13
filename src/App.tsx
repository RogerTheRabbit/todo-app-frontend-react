import "./App.css";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div className="flex justify-center h-screen items-center overflow-y-auto bg-slate-950 text-slate-100">
      <ToDoContainer />
    </div>
  );
}

export default App;
