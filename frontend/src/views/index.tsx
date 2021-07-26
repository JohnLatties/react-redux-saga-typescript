import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteProps
} from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import Layout from '../components/Layout'
import HomeView from './Home'
import LoginView from './Login'
import TimeLineView from './TimeLine'

function ViewRouter() {
  const isLogged = useAppSelector((state) => state.careRecipente.isLogged)

  const PublicRouter = (props: RouteProps) =>
    isLogged ? <Redirect to="/" /> : <Route {...props} />

  const PrivateRouter = (props: RouteProps) =>
    isLogged ? <Route {...props} /> : <Redirect to="/login" />

  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <PrivateRouter exact path="/">
            <HomeView />
          </PrivateRouter>
          <PrivateRouter exact path="/time-line">
            <TimeLineView />
          </PrivateRouter>
          <PublicRouter exact path="/login">
            <LoginView />
          </PublicRouter>
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default ViewRouter
