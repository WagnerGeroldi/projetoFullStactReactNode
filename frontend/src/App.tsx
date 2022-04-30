/* imports REACT*/
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Teste } from "./Pages/Teste";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teste" component={Teste} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
