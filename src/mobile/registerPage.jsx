import React from "react";
import styles from "./registerPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
      <a href="https://sencogoldanddiamonds.com/" target="blank"><img src='\web-icon.png'/></a>
      </div>
      <div className={styles.container}>
        <div className={styles.upperSection}>
          <img src="\back-arrow.png" alt="" className={styles.backIcon} />
          <span>Back</span>
        </div>

        <div className={styles.formWrapper}>
          <div className="header">
            <div className="form-head">
             
              <h2>Register Now</h2>
              <img src="\circle@2x.png" alt="" className='circle' />
            </div>
            <span>Submit your name!</span>
          </div>
          <form className="registeration-form">
            <label>First Name*</label>
            <input style={{height:'2.5rem'}}/>
            <label>Surname*</label>
            <input style={{height:'2.5rem'}}/>
            <label>Phone*</label>
            <input style={{height:'2.5rem'}}/>
            <label>Email*</label>
            <input style={{height:'2.5rem'}}/>
            <button className="otp-btn" id={styles.otpBtn}>SEND OTP</button>
            <label>OTP*</label>
            <input style={{height:'2.5rem'}}/>
            <button style={{height:'2.5rem'}} className="register-btn">REGISTER NOW</button>
          </form>
          <span className={styles.footer}>*Terms and Conditions apply</span>
        </div>
        
      </div>
    </div>
  );
}
