import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/header';
import ScrollButton from './components/ScrollButton/scrollButton';
import Home from './pages/Home/home';
import Filme from './pages/Filme/filme';
import Salvos from './pages/Salvos/salvos';
import Erro from './pages/Erro/erro';

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/filme/:id" component={Filme}/>
        <Route exact path="/salvos" component={Salvos}/>
        <Route path="*" component={Erro}/>
      </Switch>
    <ScrollButton/>
    </BrowserRouter>
  )
}

export default Routes;