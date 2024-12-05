import Carousel from "./components/Carousel";
import RandomUsers from "./components/RandomUsers";
import TodoList from "./components/TaskManager/TodoList";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <TodoList />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <RandomUsers />
      </div>
    </div>
  );
};

export default App;
