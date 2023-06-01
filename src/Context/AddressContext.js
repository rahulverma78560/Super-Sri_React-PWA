import { createContext, useContext, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState({});
  console.log(
    "🚀 ~ file: AddressContext.js:7 ~ AddressProvider ~ userAddress:",
    userAddress
  );

  const getUserAddress = (address) => {
    setUserAddress(address);
  };

  return (
    <AddressContext.Provider value={{ getUserAddress, userAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);

export default AddressProvider;
