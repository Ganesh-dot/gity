import React, { Component } from "react";

class LogIn extends Component {
  render() {
    return (
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Client Name</span>
            <input type="text" placeholder="Enter Your Name" required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="email" placeholder="Enter Email ID" required />
          </div>
          <div class="input-box">
            <span class="details">Phone</span>
            <input type="tel" placeholder="Enter Phone Number" required />
          </div>
          <div class="input-box">
            <span class="details">State</span>
            <input type="text" placeholder="Enter Your State" required />
          </div>
          <div class="input-box">
            <span class="details">Address</span>
            <input type="text" placeholder="Enter Correct Address" required />
          </div>
          <div class="input-box">
            <span class="details">Source</span>
            <input type="text" placeholder="Enter Source" required />
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span class="gender">Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span class="gender">Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span class="gender">Transgender</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default LogIn;
