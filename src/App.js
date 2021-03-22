import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import {  PokemonList, PokemonDetail, MyPokemon  } from './pages'
import { ApolloProvider, ApolloClient} from "@apollo/client";
// import ApolloClient from "apollo-boost";
import Footer from './components/Footer';
import dispatch from "./apollo/Reducer";
import { cache } from "./apollo/cache";


window.dispatch = dispatch;

function App() {

  const client = new ApolloClient({
    cache,
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    connectToDevTools: true,
  });

  return (
    <>
    <GlobalStyle/>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" component={PokemonList} exact />
          <Route path="/mypokemon" component={MyPokemon} exact />
          <Route path="/detail/:name" component={PokemonDetail} exact />
        </Switch>
        <Footer/>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
