import React, { createContext } from "react";

const OngletSuiviContext = createContext();

function OngletSuiviContextProvider({ children }) {
  // const [selectedOnglet, setSelectedOnglet] = useState("backlog");
  // const [isPostuled, setIsPostuled] = useState(false);
  // const handlePostuled = (item) => {
  //   setIsPostuled(!isPostuled);
  //   const offerToUpdate = offerTemplate.find((offer) => offer.id === item.id);
  //   offerToUpdate.isPostule = !offerToUpdate.isPostule;
  // };

  return (
    <OngletSuiviContext.Provider
    // value={
    //   {
    //     selectedOnglet,
    //     setSelectedOnglet,
    //     isPostuled,
    //     setIsPostuled,
    //     handlePostuled,
    //   }
    // }
    >
      {children}
    </OngletSuiviContext.Provider>
  );
}

export { OngletSuiviContext, OngletSuiviContextProvider };
