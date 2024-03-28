import Avatar from "./components/Avatar";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-dvh bg-off-black flex items-center justify-center">
      <Card>
        <Avatar src="me.jpeg" alt="me" />
      </Card>
    </div>
  );
}

export default App;
