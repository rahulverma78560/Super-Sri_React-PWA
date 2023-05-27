import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const ToasterContext = createContext(null);

const ToasterProvider = ({ children }) => {
  const showToastMessage = (MESSAGE) =>
    toast.error(MESSAGE, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const userRegister = (MESSAGE) =>
    toast.success(MESSAGE, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const userWarning = (MESSAGE) =>
    toast.warning(MESSAGE, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const itemAddedToCart = (MESSAGE) =>
    toast.success(MESSAGE, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <ToasterContext.Provider
      value={{ showToastMessage, userRegister, userWarning, itemAddedToCart }}
    >
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => useContext(ToasterContext);

export default ToasterProvider;
