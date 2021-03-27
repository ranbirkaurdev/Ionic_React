import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonActionSheet,
  IonAlert,
} from "@ionic/react";
import "./Users.css";
import axios from "axios";
import UersCard from "./UsersCard";
import SkeletonUserCard from "./SkeletonUserCard";
import { trash, close, createOutline } from "ionicons/icons";

interface NewUserProps {
  newUser: object;
}

const Users: React.FC<NewUserProps> = (props) => {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number>();
  const [showAlert4, setShowAlert4] = useState(false);
  useEffect(() => {
    addNewUser(props.newUser);
  }, [props.newUser]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let filteredArr = new Array<any>();
        let data = res.data;
        data.map((x: any) => {
          let { id, name, username, email } = x;
          if (id <= 3) {
            filteredArr.push({ id, username, name, email });
          }
        });
        setUsers(filteredArr);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addNewUser = (x: any) => {
    let data = users;
    let { username, name, email } = x;
    data.push({ id: data.length + 1, username, name, email });
  };

  const openActions = (user_id: number) => {
    setSelectedUser(user_id);
    setShowActionSheet(true);
  };

  const deleteUser = () => {
    let allUsers = users;
    var afterDeleteUser = allUsers.filter(function (user: any) {
      return user.id !== selectedUser;
    });
    setUsers(afterDeleteUser);
    setSelectedUser(0);
  };
  const editUser = (data: any) => {
    users.map((x: any) => {
      if (x.id === selectedUser) {
        x.name = data.name;
        x.email = data.email;
      }
    });
    setSelectedUser(0);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoading ? (
          users.map((x: any) => {
            let { id, username, name, email } = x;
            return (
              <UersCard
                key={id}
                id={id}
                username={username}
                user_name={name}
                user_email={email}
                openActions={(user_id: number) => openActions(user_id)}
              />
            );
          })
        ) : (
          <SkeletonUserCard />
        )}
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          cssClass="my-custom-class"
          buttons={[
            {
              text: "Delete",
              role: "destructive",
              icon: trash,
              handler: () => {
                deleteUser();
              },
            },
            {
              text: "Edit",
              icon: createOutline,
              handler: () => {
                setShowAlert4(true);
              },
            },
            {
              text: "Cancel",
              icon: close,
              role: "cancel",
              handler: () => {
                console.log("Cancel clicked");
              },
            },
          ]}
        ></IonActionSheet>
        <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          cssClass="my-custom-class"
          header={"Update User"}
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Name",
            },
            {
              name: "email",
              type: "text",
              placeholder: "Email",
            },
          ]}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Done!",
              handler: (data: any) => {
                editUser(data);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Users;
