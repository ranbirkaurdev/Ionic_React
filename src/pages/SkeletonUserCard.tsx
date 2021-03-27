import React from "react";
import { IonSkeletonText } from "@ionic/react";

const SkeletonUserCard: React.FC = () => {
  return (
    <>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
      <div className="ion-padding custom-skeleton">
        <IonSkeletonText animated style={{ width: "60%" }} />
        <IonSkeletonText animated />
        <IonSkeletonText animated style={{ width: "88%" }} />
        <IonSkeletonText animated style={{ width: "70%" }} />
        <IonSkeletonText animated style={{ width: "60%" }} />
      </div>
    </>
  );
};

export default SkeletonUserCard;
