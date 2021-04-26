/*
Requisitos Não Funcionais
     RNF01. Construir toda aplicação utilizando React (Hooks), StyledComponent e Redux. - CHECK

     RNF02. Consumir o arquivo JSON para obter os jogos e suas regras (Em Anexo) - CHECK

     RNF03. Aplicar responsividade - CHECK

     RNF4. Utilizar Typescript - CHECK

Requisitos Funcionais
     RF01. Validar o e-mail no registro, login e no reset password - CHECK

     RF02. Autenticação estática - CHECK

     RF03. Complete Game: para completar aleatoriamente os números - CHECK

     RF04. Clear game: limpar todos os números selecionados - CHECK

     RF05. Add to cart: adicionar os números no carrinho - CHECK

     RF06. Delete: apagar um item do carrinho - CHECK

     RF07. Save: adicionar jogos no redux (acima de R$ 30,00) - CHECK

     RF08. Listar os jogos após cadastrados - CHECK

     RF09. Criar filtro para listagem e criação de jogos. - CHECK
*/
import React, { Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useAppSelector } from './hooks';

import Spinner from './components/UI/Spinner';

import Layout from './hoc/Layout';
const Logout = React.lazy(() => import('./components/Logout'));
const Login = React.lazy(() => import('./containers/Auth/Pages/Login'));
const Register = React.lazy(() => import('./containers/Auth/Pages/Register'));
const Reset = React.lazy(() => import('./containers/Auth/Pages/Reset'));
const LoggedIn = React.lazy(() => import('./containers/LoggedIn/Pages/Recent'));
const Newbet = React.lazy(() => import('./containers/LoggedIn/Pages/Newbet'));

const App: React.FC = () => {
  const isAuthenticated = useAppSelector(state => state.auth.currentUser !== null);

  let routes = (
    <Switch>
      <Route path="/registration" component={Register} />
      <Route path="/reset" component={Reset} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );

  isAuthenticated && (routes = (
    <Switch>
      <Route path="/newbet" component={Newbet} />
      <Route path="/home" component={LoggedIn} />
      <Route path="/registration" component={Register} />
      <Route path="/reset" component={Reset} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/home" />
    </Switch>
  ));

  return (
    <div>
      <Layout>
        <Suspense fallback={<Spinner />}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
