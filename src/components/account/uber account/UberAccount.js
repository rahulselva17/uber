import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UberAccount.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const HorizontalSections = () => {
    const [activeSection, setActiveSection] = useState('section1');
    const [imagePreview, setImagePreview] = useState(null);
    const userId = 1;
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const fullName = firstName + "  " + lastName;
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [activePopup, setActivePopup] = useState(null);

    const navigate = useNavigate();

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const handleBackClick = () => {
        navigate("/account");
    };

    useEffect(() => {
        fetchProfilePic();
        fetchProfileInfo();
    }, [userId]);

    const fetchProfileInfo = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/profileInfo/${userId}`);
            if (res.status === 200) {
                setFirstName(res.data.first_name);
                setLastName(res.data.last_name);
                setEmail(res.data.email);
                setPhone(res.data.number);
            } else {
                console.error("error fetching profile info");
            }
        } catch (error) {
            console.error('Error fetching profile info:', error);
        }
    }


    const fetchProfilePic = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/profile/${userId}`);
            if (response.data.success && response.data.profilePic) {
                console.log(response.data.profilePic)
                setImagePreview(`http://localhost:4000${response.data.profilePic}`);
            }
        } catch (error) {
            console.error('Error fetching profile picture:', error);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
                handleUpload(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async (file) => {
        if (!file) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("profilePic", file);
        formData.append("userId", userId);

        try {
            const response = await axios.post("http://localhost:4000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.data.success) {
                alert("Profile picture uploaded successfully!");
            } else {
                alert("Failed to upload profile picture.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            console.log(error);
            alert("Error uploading image.");
        }
    };

    const deleteProfilePic = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/deleteProfilePic/${userId}`);
            if (response.data.success) {
                alert('Profile picture deleted successfully!');
                setImagePreview(null);
            } else {
                alert('Failed to delete profile picture.');
            }
        } catch (error) {
            console.error('Error deleting profile picture:', error);
            alert('Error deleting profile picture.');
        }
    };

    const showPopup = (popupId) => {
        setActivePopup(popupId);
    };

    const hidePopup = () => {
        setActivePopup(null);
    };

    const handleNameUpdate = async () => {

        const data = {
            firstName: firstName,
            lastName: lastName,
            userId: userId
        };

        try {
            const response = await axios.post('http://localhost:4000/updateProfileName', data);
            if (response.data.success) {
                alert('Profile name updated successfully');
            }
        } catch (error) {
            console.error('Failed to update the profile name');
        }
    }

    const handleEmailUpdate = async () => {
        const data = {
            email: email,
            userId: userId
        };

        try {
            const response = await axios.post('http://localhost:4000/updateEmail', data);
            if (response.data.success) {
                alert('Email updated successfully');
            }
        } catch (error) {
            console.error('Failed to update the Email');
        }
    }

    const handlePhoneUpdate = async () => {
        const data = {
            phone: phone,
            userId: userId
        };

        try {
            const response = await axios.post('http://localhost:4000/updatePhone', data);
            if (response.data.success) {
                alert('Phone number updated successfully');
            }
        } catch (error) {
            console.error('Failed to update the Phone number');
        }
    }

    const handlePasswordUpdate = async () => {
        if (password === confirmPassword) {
            const data = {
                password: password,
                userId: userId
            };

            try {
                const response = await axios('http://localhost:4000/updatePassword', data);
                if (response.data.success) {
                    alert('Password Updated ')
                }
            } catch (error) {
                console.error("");
            }

        } else {
            alert("Confirm password doesn't match with the password entered.");
            console.error("Confirm password doesn't match with the password entered.");
        }
    }

    return (
        <div className="page-container">
            <button onClick={handleBackClick} className="back-button">
                &times;
            </button>
            <h3>Uber Account</h3>
            <div className="section-container">
                <div
                    className={`section ${activeSection === "section1" ? "active" : ""}`}
                    onClick={() => toggleSection("section1")}
                >
                    <h4>Account Info</h4>
                </div>
                <div
                    className={`section ${activeSection === "section2" ? "active" : ""}`}
                    onClick={() => toggleSection("section2")}
                >
                    <h4>Security</h4>
                </div>
                <div
                    className={`section ${activeSection === "section3" ? "active" : ""}`}
                    onClick={() => toggleSection("section3")}
                >
                    <h4>Privacy & Data</h4>
                </div>
            </div>

            <div className="content-container">
                {activeSection === "section1" && (
                    <div className="content">
                        <h2>Account Info</h2>
                        <div className="profile-pic-container">
                            <label htmlFor="file-input">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Profile" className="profile-pic-img" />
                                ) : (
                                    <div className="profile-pic-placeholder">
                                        <FontAwesomeIcon icon={faUser} size="1x" color="white" className='person-icon' />
                                        <FontAwesomeIcon icon={faUpload} size="1x" color="white" className='upload-icon' />
                                    </div>
                                )}
                                {imagePreview && (
                                    <div className="delete-icon" onClick={deleteProfilePic}>
                                        &#10006;
                                    </div>
                                )}
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                        </div>
                        <h3>Basic Info</h3>
                        <div>
                            <div onClick={() => showPopup('popup1')} style={{ cursor: 'pointer' }}>
                                <label>Name</label>
                                <p>{fullName}</p>
                            </div>
                            {activePopup === 'popup1' && (
                                <div className="popup">
                                    <div className="popup-content">
                                        <div className="popup-inside">
                                            <h2>Name</h2>
                                            <p>This is the name you would like other people to use when referring to you.</p>
                                            <p>First name</p>
                                            <input type="text" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                            <p>Last name</p>
                                            <input type="text" placeholder={lastName} onChange={(e) => setLastName(e.target.value)} />
                                            <br />
                                            <button onClick={handleNameUpdate} className="popupUpdate">Update</button>
                                            <button onClick={hidePopup} className="popupClose">&times;</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div onClick={() => showPopup('popup2')} style={{ cursor: 'pointer' }}>
                                <label>Email Address</label>
                                <p>{email}</p>
                            </div>
                            {activePopup === 'popup2' && (
                                <div className="popup">
                                    <div className="popup-content">
                                        <h2>Email</h2>
                                        <p>You'll use this email to receive messages, sign in and recover your account.</p>
                                        <input type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                                        <br />
                                        <button onClick={handleEmailUpdate} className="popupUpdate">Update</button>
                                        <button onClick={hidePopup} className="popupClose">&times;</button>
                                    </div>
                                </div>
                            )}
                            <hr />
                            <div onClick={() => showPopup('popup3')} style={{ cursor: 'pointer' }}>
                                <label>Mobile Number</label>
                                <p>{phone}</p>
                            </div>
                            {activePopup === 'popup3' && (
                                <div className="popup">
                                    <div className="popup-content">
                                        <h2>Phone number</h2>
                                        <p>You'll use this number to get notifications, sign in and recover your account.</p>
                                        <input type="text" placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
                                        <br />
                                        <button onClick={handlePhoneUpdate} className="popupUpdate">Update</button>
                                        <button onClick={hidePopup} className="popupClose">&times;</button>
                                    </div>
                                </div>
                            )}
                            <hr />
                        </div>
                    </div>
                )}
                {activeSection === "section2" && (
                    <div className="content">
                        <h2>Security</h2>
                        <h4>Logging in to Uber</h4>
                        <div>
                            <div onClick={() => activePopup('popup4')} style={{ cursor: 'pointer' }}>
                                <p>Password</p>
                            </div>
                            {activePopup === 'popup4' && (
                                <div className="popup">
                                    <div className="popup-content">
                                        <h2>Password</h2>
                                        <p>Your password must be at least 8 characters long and contain at least one digit and one non-digit character.</p>
                                        <label>New password</label>
                                        <input type="password" placeholder={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label>Confirm new password</label>
                                        <input type="password" placeholder={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        <br />
                                        <button onClick={handlePasswordUpdate} className="popupUpdate">Update</button>
                                        <button onClick={hidePopup} className="popupClose">&times;</button>
                                    </div>
                                </div>
                            )}
                            <hr />
                        </div>
                    </div>
                )}
                {activeSection === "section3" && (
                    <div className="content">Content for Section 3</div>
                )}
            </div>
        </div>
    );
};

export default HorizontalSections;
