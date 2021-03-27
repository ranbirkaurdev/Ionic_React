import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface UsersProps {
  id: string;
  username: string;
  user_name: string;
  user_email: string;
  openActions: Function;
}

const UersCard: React.FC<UsersProps> = ({
  id,
  username,
  user_name,
  user_email,
  openActions,
}) => {
  const openAtions = () => {
    openActions(id);
  };
  return (
    <IonCard onClick={() => openAtions()}>
      <IonCardHeader>
        <IonCardSubtitle>{username}</IonCardSubtitle>
        <IonCardTitle>{user_name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>{user_email}</IonCardContent>
    </IonCard>
  );
};

export default UersCard;
