import { useState } from "react";
import { connect } from "react-redux";
import { showErrorMessage, showSuccessMessage } from "../../actions/message";
import "./form.css";
const Form = ({ message, showErrorMessage, showSuccessMessage }) => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    lga: "",
    address: "",
    asset: "",
    description: "",
    image: "",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [stateError, setStateError] = useState("");
  const [lgaError, setLgaError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [assetError, setAssetError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [imagError, setImageError] = useState("");

  const handleInfoChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phoneNumber,
      state,
      lga,
      address,
      asset,
      description,
      image,
    } = info;

    if (!name) {
      setNameError("Please fill out name");
      showErrorMessage();
    }
    if (!email) {
      setEmailError("Email cannot be empty");
      showErrorMessage();
    }
    if (!phoneNumber) {
      setPhoneError("Phone number cannot be empty");
      showErrorMessage();
    }
    if (!state) {
      setStateError("Please fill valid state");
      showErrorMessage();
    }
    if (!lga) {
      setLgaError("lga cannot be empty");
      showErrorMessage();
    }
    if (!address) {
      setAddressError("Address cannot be empty");
      showErrorMessage();
    }
    if (!description) {
      setDescriptionError("Description is empty");
      showErrorMessage();
    }
    if (!asset) {
      setAssetError("Asset cannot be empty");
      showErrorMessage();
    }
    if (!image) {
      setImageError("Image cannot be empty");
      showErrorMessage();
    } else {
      showSuccessMessage();
      setInfo({
        name: "",
        email: "",
        phoneNumber: "",
        state: "",
        lga: "",
        address: "",
        asset: "",
        description: "",
        image: "",
      });
    }
  };

  return (
    <div className="form-bg">
      <form onSubmit={handleInfoSubmit}>
        {message && <h3>{message}</h3>}
        <div className="info">
          <h3>User Information</h3>
          <div className="input_box">
            <label>Full Name</label>
            <div className="input_con">
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{nameError}</p>
          </div>
          <div className="input_box">
            <label>Email Address</label>
            <div className="input_con">
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{emailError}</p>
          </div>
          <div className="input_box">
            <label>Phone Number</label>
            <div className="input_con">
              <input
                type="tel"
                name="phoneNumber"
                value={info.phoneNumber}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{phoneError}</p>
          </div>
        </div>
        <div className="info">
          <h3 className="fault">Fault Information</h3>
          <div className="input_box">
            <label>State</label>
            <div className="input_con">
              <input
                type="text"
                name="state"
                value={info.state}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{stateError}</p>
          </div>
          <div className="input_box">
            <label>LGA</label>
            <div className="input_con">
              <input
                type="text"
                name="lga"
                value={info.lga}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{lgaError}</p>
          </div>
          <div className="input_box">
            <label>Address</label>
            <div className="input_con">
              <input
                type="text"
                name="address"
                value={info.address}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{addressError}</p>
          </div>
          <div className="input_box">
            <label>Select Asset</label>
            <div className="input_con">
              <input
                type="text"
                name="asset"
                value={info.asset}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{assetError}</p>
          </div>
          <div className="input_box">
            <label>Fault description</label>
            <div className="input_con">
              <textarea
                name="description"
                value={info.description}
                onChange={handleInfoChange}
              ></textarea>
            </div>
            <p className="field_error">{descriptionError}</p>
          </div>
          <div className="input_box">
            <label>Upload image</label>
            <div className="input_con">
              <input
                type="file"
                name="image"
                value={info.image}
                onChange={handleInfoChange}
              />
            </div>
            <p className="field_error">{imagError}</p>
          </div>
        </div>
        <div className="bt_info">
          <button>Report Fault</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showErrorMessage: () => dispatch(showErrorMessage()),
  showSuccessMessage: () => dispatch(showSuccessMessage()),
});
const mapStateToProps = (state) => ({
  message: state.message.message,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
