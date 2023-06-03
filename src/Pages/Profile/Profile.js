import React from "react";
import styles from "./Profile.module.css";
import logout from "../../images/logout.png";
const Profile = () => {
  const handleClearUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    window.location.href = "/login";
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
