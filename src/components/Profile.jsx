import React from "react";
import profilePic from "../images/image 356.png";

function Profile() {
  return (
    <div className="profile-info">
      <div className="profile-bg"></div>
      <div className="profile-img">
        <img src={profilePic} alt="profile pic" />
      </div>
      <div className="candidate-info">
        <h1>Candidate Name</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br /> elit. Curabitur dignissim rutrum dui quis malesuada. <br />
          Nam id dapibus augue. Nulla convallis <br />
          condimentum orci, et varius eros semper in
        </p>
      </div>
      <div>
        <div>
          <button className="nav-btn">Message</button>
          <button className="nav-btn">Follow</button>
        </div>
        <div>
          <p>No. of Followers</p>
          <p>No. of Followings</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
