import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";

import "./AddUser.css";

interface NewUserProps {
  newUser: Function;
}

const Tab2: React.FC<NewUserProps> = (props) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [showToast1, setShowToast1] = useState(false);

  const handleSubmit = () => {
    props.newUser({ name, email, username });
    setName("");
    setEmail("");
    setUsername("");
    setShowToast1(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="con">
        <IonItem className="input">
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem className="input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem className="input">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton
          color="primary"
          expand="block"
          className="button"
          onClick={() => handleSubmit()}
        >
          Add User
        </IonButton>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="User Added."
          duration={200}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
