import { createContext, useContext, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState([
    {
      id : 1,
      fullName: "Shilpi Kumari",
      email: "shilpinsingh1117@gmail.com",
      phone: "6203601618",
      zip: "560107",
      country: "India",
      city: "Bengaluru",
      landmark: "Hemanth Bakery",
      address: "#59 Shree Hari Geeta Building Soladevanhalli, Bengaluru, Karnataka 560107",
    },
    {
      id : 2,
      fullName: "Nikhil Ranjan Kumar",
      email: "nikhilranjankumar1999@gmail.com",
      phone: "6205666646",
      zip: "560107",
      country: "India",
      city: "Dhanbad",
      landmark: "Near Talab",
      address: "Lal Bangla Road, Gosidhi Govindpur Dhanbad, Jharkhand 826001",
    },
    {
      id : 3,
      fullName: "Rahul Verma",
      email: "rahulverma11@gmail.com",
      phone: "9661705438",
      zip: "826009",
      country: "India",
      city: "Bokaro",
      landmark: "Near Bokaro Thana",
      address: "Bokaro Sector 4, Bokaro Steel City, Jharkhand 827004",
    },
  ]);

  const [selectedAddress , setSelectedAddress] = useState()
  console.log("🚀 ~ file: AddressContext.js:43 ~ AddressProvider ~ selectedAddress:", selectedAddress)
 

  const getUserAddress = (address) => {
    setUserAddress((prev) => [...prev, address]);
  };

  const handleSelectedAddress = (id) => {
    const address = userAddress.find((address) => address.id === id);
    setSelectedAddress(address);  
  }

  const updateAddress = (id, updatedAddress) => {
    const updatedAddresses = userAddress.map((address) => {
      if (address.id === id) {
        return {
          ...address,
          fullName: updatedAddress?.fullName ? updatedAddress.fullName : address.fullName,
          email: updatedAddress?.email ? updatedAddress.email : address.email,
          phone: updatedAddress?.phone ? updatedAddress.phone : address.phone,
          zip: updatedAddress?.zip ? updatedAddress.zip : address.zip,
          country: updatedAddress?.country ? updatedAddress.country : address.country,
          city: updatedAddress?.city ? updatedAddress.city : address.city,
          landmark: updatedAddress?.landmark ? updatedAddress.landmark : address.landmark,
          address: updatedAddress?.address ? updatedAddress.address : address.address,
        };
      }
      return address;
    });
    setUserAddress(updatedAddresses);
  }

  const addNewUserAddress = (newAddress) => {
    setUserAddress((prev) => [...prev, { ...newAddress, id: userAddress.length + 1 }]);
  }

  const deleteUserAddress = (id) => {
    const updatedAddresses = userAddress.filter((address) => address.id !== id);
    setUserAddress(updatedAddresses);
  }

  return (
    <AddressContext.Provider
      value={{
        getUserAddress,
        userAddress,
        handleSelectedAddress,
        selectedAddress,
        updateAddress,
        addNewUserAddress,
        deleteUserAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);

export default AddressProvider;
