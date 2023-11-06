import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-section">
        <img src="/logo with website.png" className="logo" />
        <img src="/coin@2x.png" className="coin-pic" />
        <div className="content-container">
       
          <img src='/Senco 05.11.00_01_57_23.Still001@2x.png' className='content-image'/>
          <span>
            Get a personalized Ma Laskhmi Mantra Pooja <br /> with Your Name and
            a chance to win a Senco Gold Coin{" "}
          </span>
        </div>
        <div className="image-section">
          <div className="left-img-section">
            <div className="ceo-section">
        
              <img src="/suv@2x.png" className="ceo-pic" />
              <img
                src="/Senco 05.11.00_01_57_07.Still021.png"
                className="ceo-label"
              />
            </div>
            <div className="direcror-section">
             
              <img src="/Joi@2x.png" className="director-pic" />
               <img
                src="/Senco 05.11.00_01_57_24.Still020.png"
                className="director-label"
              />
            </div>
          </div>
          <div className="priest-section">
        
            <img src="/laxmi.png" className="preist-pic" />
            <img
              src="/Senco 05.11.00_02_14_21.Still005.png"
              className="priest-label"
            />
          </div>
        </div>
      </div>
      <div className="register-section">
        <a className="senco-hyperlink" href="https://sencogoldanddiamonds.com/" target="blank">Visit Senco Website</a>
        <div className="form-wrapper">
          <div className="header">
            <h3>Register Now</h3>
            <span>Submit your name!</span>
          </div>
          <form className="registeration-form">
            <label>First Name*</label>
            <input />
            <label>Surname*</label>
            <input />
            <label>Phone*</label>
            <input />
            <label>Email*</label>
            <input />
            <button className="otp-btn">SEND OTP</button>
            <label>OTP*</label>
            <input />
            <button className="register-btn">REGISTER NOW</button>
          </form>
        </div>
        <span className='footer'> *Terms and condition apply</span>
      </div>
    </div>
  );
}

export default App;
