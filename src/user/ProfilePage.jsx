import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css"; // Import CSS file

// ✅ Import images
import avatar from "../assets/avatar.jpg";
import idPic from "../assets/idpic.png"; // Use exact case!

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Details"); // ✅ Default to "Details"
  const navigate = useNavigate();

  // ✅ Dummy user data (Replace with API data)
  const user = {
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    profilePic: avatar,
    idPic: idPic, // ✅ Correctly added idPic
    status: "", // Empty status for testing
    documents: [], // Empty documents for testing
    benefits: [],
  };

  // ✅ Determine user status based on available data
  const userHasData = user.name && user.email && user.documents.length > 0;
  const status = userHasData ? "approved" : "Unverified";

  const handleApplicationClick = () => {
    navigate("/application-form", { state: { user } });
  };

  return (
    <div className="profile-container">
      {/* ✅ Profile Header */}
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h2>{user.name || "Unverified"}</h2>
          <p>{user.email || "Unverified"}</p>
          <p className={`status ${status.toLowerCase()}`}>Status: {status}</p>
        </div>
      </div>  

      {/* ✅ Tab Navigation */}
      <div className="tab-navigation">
        {["Details", "benefits", "ID"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ Tab Content */}
      <div className="tab-content">
        {activeTab === "Details" && (
          <ul>
            {user.documents.length > 0 ? (
              user.documents.map((doc, index) => <li key={index}>{doc}</li>)
            ) : (
              <li>Unverified</li>
            )}
            {user.documents.length === 0 && (
              <button className="application-button" onClick={handleApplicationClick}>Send Application</button>
            )}
          </ul>
        )}
        {activeTab === "benefits" && (
          <ul>
            {user.benefits.length > 0 ? (
              user.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)
            ) : (
              <li>Unverified</li>
            )}
          </ul>
        )}
        {activeTab === "ID" && (
          <div className="id-container">
            {user.idPic ? (
              <img src={user.idPic} alt="ID" className="id-pic" />
            ) : (
              <p>Unverified</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;