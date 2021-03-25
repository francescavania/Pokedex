import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import {  PokemonList, PokemonDetail, MyPokemon  } from './pages'
import { ApolloProvider} from "@apollo/client";
import ApolloClient from "apollo-boost";
import {Footer, BottomTab} from './components';
import dispatch from "./apollo/Reducer";

window.dispatch = dispatch;

function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    // connectToDevTools: true,
  });

  return (
    <div className="App">
    <GlobalStyle/>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" component={PokemonList} exact />
          <Route path="/mypokemon" component={MyPokemon} exact />
          <Route path="/detail/:name" component={PokemonDetail} exact />
        </Switch>
        <Footer/>
        <BottomTab/>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;
