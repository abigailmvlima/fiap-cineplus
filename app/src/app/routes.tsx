import { Route, Switch } from "react-router-native";

import show from "@show/index";
import ViewHome from "@view/viewHome";
import ViewLogin from "@view/viewLogin";
import ViewRegister from "@view/viewRegister";
import ViewRegisterMovie from "@view/viewRegisterMovie";
import ViewReward from "@view/viewReward";
import ViewMovieDetail from "@view/viewMovieDetail";
import viewMovieDetail from "@view/viewMovieDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path={show.route.home} component={ViewHome} />
      <Route path={show.route.reward} component={ViewReward} />
      <Route path={show.route.login} component={ViewLogin} />
      <Route path={show.route.register} component={ViewRegister} />
      <Route path={show.route.movieRegister} component={ViewRegisterMovie} />
      <Route path={show.route.movieDetail} component={viewMovieDetail} />
      <Route exact component={ViewLogin} />
    </Switch>
  );
};

export default Routes;
