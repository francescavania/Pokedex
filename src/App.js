import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import {  PokemonList, PokemonDetail, MyPokemon  } from './pages'
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import Footer from './components/Footer';
// import Navbar from './components/Navbar';


function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
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
