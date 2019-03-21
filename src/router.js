import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import justLaunch from "./pages/justLaunch/JustLaunch";
import dashboard from "./pages/dashboard/Dashboard";
import notes from "./pages/notes/Notes";
import documents from "./pages/documents/Documents";
import reference from "./pages/reference/Reference";
import NotFound from "./pages/notFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={justLaunch} />
      <Route exact path="/dashboard" component={dashboard} />
      <Route exact path="/notes" component={notes} />
      <Route exact path="/documents" component={documents} />
      <Route exact path="/reference" component={reference} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
