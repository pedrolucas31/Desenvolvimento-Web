import { CardProfile } from "../components/CardProfile"

export function App() {
  return (
    <>
      <h1>Class 02 Components</h1>
      <CardProfile name="Pedro" age={18}/>
      <CardProfile name="Wellington" age={45}/>
    </>
  );
}

