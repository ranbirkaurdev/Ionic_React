import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { peopleOutline, personAdd } from "ionicons/icons";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [newUser, setNewUser] = useState({});
  const Addons = (newUserObj: object) => {
    setNewUser(newUserObj);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/users"
              render={() => <Users newUser={newUser} />}
              exact={true}
            />
            <Route
              path="/adduser"
              render={() => (
                <AddUser newUser={(newUserObj: object) => Addons(newUserObj)} />
              )}
              exact={true}
            />
            <Route
              path="/"
              render={() => <Redirect to="/users" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="users" href="/users">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Users</IonLabel>
            </IonTabButton>
            <IonTabButton tab="adduser" href="/adduser">
              <IonIcon icon={personAdd} />
              <IonLabel>Add User</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
