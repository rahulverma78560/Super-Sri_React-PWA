import React, { useState } from "react";
import styles from "./Address.module.css";
import { ToastContainer } from "react-toastify";
import { useAddress } from "../../Context/AddressContext";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [showAddress, setShowNewAddress] = useState(false);
  const navigate = useNavigate();
  const [addNewAddress, setAddNewAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    zip: "",
    country: "",
    city: "",
    landmark: "",
    address: "",
  });
  const {
    userAddress,
    handleSelectedAddress,
    selectedAddress,
    updateAddress,
    addNewUserAddress,
    deleteUserAddress,
  } = useAddress();
  const [updatedAddress, setUpdatedAddress] = useState({
    fullName: selectedAddress?.fullName,
    email: selectedAddress?.email,
    phone: selectedAddress?.phone,
    zip: selectedAddress?.zip,
    country: selectedAddress?.country,
    city: selectedAddress?.city,
    landmark: selectedAddress?.landmark,
    address: selectedAddress?.address,
  });

  const handleUpdateAddress = (e, ID) => {
    e.preventDefault();
    updateAddress(ID, updatedAddress);
    setShowEditAddress(false);
  };

  const handleAddNewAddress = (e, newAddress) => {
    e.preventDefault();
    addNewUserAddress(newAddress);
    setShowNewAddress(false);
  };

  const handleDeleteAddress = () => {
    deleteUserAddress(selectedAddress.id);
    setShowEditAddress(false);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className={styles.grid__container}>
            <div className={styles.previous__address}>
              <h1 className="title">Previous Added Address</h1>
              {userAddress.map((address) => {
                return (
                  <div className={styles.address__container}>
                    <input
                      type="radio"
                      name="address"
                      id="address"
                      onChange={(e) => handleSelectedAddress(address.id)}
                    />
                    <div
                      key={address.id}
                      className={
                        selectedAddress?.id === address.id
                          ? styles.address__card__active
                          : styles.address__card
                      }
                    >
                      <div className={styles.address__card__header}>
                        <h3>{address.fullName}</h3>
                        <h3>{address.phone}</h3>
                      </div>
                      <div className={styles.address__card__body}>
                        <p>{address.address}</p>
                        <p>{address.landmark}</p>
                        <p>{address.city}</p>
                        <p>{address.zip}</p>
                        <p>{address.country}</p>
                        {selectedAddress?.id === address.id && (
                          <div className={styles.address__edit__deltet__button}>
                            <button
                              className={styles.checkOut__button}
                              onClick={() =>
                                setShowEditAddress((prev) => !prev)
                              }
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleDeleteAddress}
                              className={styles.checkOut__button}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <button
                className={styles.checkOut__button}
                onClick={() => setShowNewAddress((prev) => !prev)}
              >
                add new Address
              </button>
            </div>
            {showEditAddress ? (
              <div
                style={{
                  display: showEditAddress ? "block" : "none",
                }}
                className={styles.address__form}
              >
                <h1>Shipping Address</h1>
                <form className={styles.form__control} action="#">
                  <div className={styles.personal__info}>
                    <div className={styles.fullName}>
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        value={
                          updatedAddress?.fullName || selectedAddress?.fullName
                        }
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            fullName:
                              e.target.value || selectedAddress?.fullName,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.email__address}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={updatedAddress?.email || selectedAddress?.email}
                        placeholder="Email"
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.phone__zipCode}>
                    <div className={styles.phone__number}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={updatedAddress?.phone || selectedAddress?.phone}
                        placeholder="Phone Number"
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.zip__code}>
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={updatedAddress?.zip || selectedAddress?.zip}
                        placeholder="Zip Code"
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            zip: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.country__city}>
                    <div className={styles.country}>
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={
                          updatedAddress?.country || selectedAddress?.country
                        }
                        placeholder="Country"
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            country: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.city}>
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        value={updatedAddress?.city || selectedAddress?.city}
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            city: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.address__landmark}>
                    <div className={styles.landmark}>
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        placeholder="Landmark"
                        value={
                          updatedAddress?.landmark || selectedAddress?.landmark
                        }
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            landmark: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.address}>
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={
                          updatedAddress?.address || selectedAddress?.address
                        }
                        placeholder="Complete Address"
                        onChange={(e) =>
                          setUpdatedAddress((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.payment__button}>
                    <button
                      className={styles.checkOut__button}
                      onClick={(e) =>
                        handleUpdateAddress(e, selectedAddress?.id)
                      }
                    >
                      Update Address
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div
                style={{
                  display: showAddress ? "block" : "none",
                }}
                className={styles.address__form}
              >
                <h1>Shipping Address</h1>
                <form className={styles.form__control} action="#">
                  <div className={styles.personal__info}>
                    <div className={styles.fullName}>
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                        value={addNewAddress.fullName}
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.email__address}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={addNewAddress.email}
                        placeholder="Email"
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.phone__zipCode}>
                    <div className={styles.phone__number}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={addNewAddress.phone}
                        placeholder="Phone Number"
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.zip__code}>
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        type="text"
                        name="zip"
                        id="zip"
                        value={addNewAddress.zip}
                        placeholder="Zip Code"
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            zip: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.country__city}>
                    <div className={styles.country}>
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        value={addNewAddress.country}
                        placeholder="Country"
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            country: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.city}>
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        value={addNewAddress.city}
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            city: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.address__landmark}>
                    <div className={styles.landmark}>
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        placeholder="Landmark"
                        value={addNewAddress.landmark}
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            landmark: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className={styles.address}>
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={addNewAddress.address}
                        placeholder="Complete Address"
                        onChange={(e) =>
                          setAddNewAddress((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.payment__button}>
                    <button
                      className={styles.checkOut__button}
                      onClick={(e) => handleAddNewAddress(e, addNewAddress)}
                    >
                      Add New Address
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {selectedAddress && <div className="container">
        <div className={styles.payment__button}>
          <button className={styles.checkOut__button}>Pay online</button>
          <button className={styles.checkOut__button} onClick={() => navigate("/success")} >Cash on delivery</button>
        </div>
      </div>}
    </>
  );
};

export default Address;
