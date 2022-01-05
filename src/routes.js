import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ScrollButton from './components/ScrollButton/scrollButton';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Salvos from './pages/Salvos';
import Erro from './pages/Erro';

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