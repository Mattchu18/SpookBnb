import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      ).then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <div className="form-name-errors">
          Email
          {errors.email && <p className="errors">{errors.email}</p>}
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="form-input">
          <div className="form-name-errors">

          Username
          {errors.username && <p className="errors">{errors.username}</p>}
         </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            </div>


            <div className="form-input">
          <div className="form-name-errors">
          First Name
          {errors.firstName && <p className="errors">{errors.firstName}</p>}
          </div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          </div>
          <div className="form-input">
          <div className="form-name-errors">

          Last Name
          {errors.lastName && <p className="errors">{errors.lastName}</p>}
          </div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
            </div>

            <div className="form-input">
          <div className="form-name-errors">
          Password
          {errors.password && <p className="errors">{errors.password}</p>}
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>

          <div className="form-input">
          <div className="form-name-errors">
          Confirm Password
          {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
          </div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          </div>
          <div className="spot-button">
        <button disabled={!(email && username.length > 3 && firstName && lastName && password.length > 5 && confirmPassword)} type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
