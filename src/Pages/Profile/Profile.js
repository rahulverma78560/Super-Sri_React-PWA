import React from "react";
import styles from "./Profile.module.css";
import logout from "../../images/logout.png";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate()
  const handleClearUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    navigate("/login")
  };

  

  return (
    <section>
      <div className="container">
        <div className={styles.grid__container}>
          <div className={styles.image__grid}>
            <img src={logout} alt="bye-bye" loading="lazy" />
          </div>
          <div className={styles.details}>
            <h1>Welcome Back</h1>
            <button className="btn btn-primary" onClick={handleClearUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
