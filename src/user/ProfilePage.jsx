import { useState } from "react";
import "./ProfilePage.css"; // Import CSS file

// ✅ Import images
import avatar from "../assets/avatar.jpg";
import idPic from "../assets/idpic.png"; // Use exact case!



const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Details"); // ✅ Default to "Details"

  // ✅ Dummy user data (Replace with API data)
  const user = {
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    profilePic: avatar,
    idPic: idPic, // ✅ Correctly added idPic
    status: "Approved",
    documents: ["Name: Juan Dela Cruz", "Age: 21","Place of Birth: Sta.cruz Laguna","Gender: Male","Email: juan@example.com"],
    benefits: ["Monthly Allowance", "Scholarship"],
  };

  return (
    <div className="profile-container">
      {/* ✅ Profile Header */}
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className={`status ${user.status.toLowerCase()}`}>Status: {user.status}</p>
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
            {user.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
            <button className="edit-button">Send Application</button>
          </ul>
        )}
        {activeTab === "benefits" && (
          <ul>
            {user.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}
        {activeTab === "ID" && (
          <div className="id-container">
            <img src={user.idPic} alt="ID" className="id-pic" />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
