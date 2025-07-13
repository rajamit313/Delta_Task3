"use client";

import React, { useState, useEffect } from "react";
import CloudinaryUploader from "@/components/CloudinaryUploader";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [emailID, setEmailID] = useState('');
  const [mobile, setMobile] = useState('');
  const [editemailID, setEditEmailID] = useState(false);
  const [editmobile, setEditMobile] = useState(false);
  const [profilePic, setProfilePic] = useState('/defaultprofilepic.png');

  const findData = async () => {
    const res = await fetch("/api/add/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await res.json();
    setUsername(data.username);
    setEmailID(data.emailID);
    setMobile(data.mobile);
    setProfilePic(data.profilepic);
  };

  useEffect(() => {
    findData();
  }, []);

  const saveHandler = async () => {
    const res = await fetch("/api/add/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailID, mobile, profilePic }),
    });
    const data = await res.json();
    findData();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="bg-[rgba(255,255,255,0.1)] shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center gap-3 mb-6">
          <img src={profilePic} alt="Profile" className="w-36 h-36 rounded-full object-cover border-2 border-green-400 shadow" />
          <CloudinaryUploader onUpload={(url) => setProfilePic(url)} />
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-green-700 font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              readOnly
              className="w-full md:w-142 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"/>
          </div>

          <div>
            <label className="block text-green-700 font-medium mb-1">Email ID</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={emailID}
                readOnly={!editemailID}
                onChange={(e) => setEmailID(e.target.value)}
                className={`flex-1 px-4 py-2 border rounded-md ${editemailID ? 'bg-white border-green-400' : 'bg-gray-100 border-gray-300'}`}/>
              <button onClick={() => setEditEmailID(!editemailID)} className="cursor-pointer">
                <lord-icon
                  src="https://cdn.lordicon.com/iubtdgvu.json"
                  trigger="hover"
                  colors="primary:#00b894,secondary:#55efc4"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-green-700 font-medium mb-1">Mobile</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={mobile || ''}
                readOnly={!editmobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`flex-1 px-4 py-2 border rounded-md ${editmobile ? 'bg-white border-green-400' : 'bg-gray-100 border-gray-300'}`}
              />
              <button onClick={() => setEditMobile(!editmobile)} className="cursor-pointer">
                <lord-icon
                  src="https://cdn.lordicon.com/iubtdgvu.json"
                  trigger="hover"
                  colors="primary:#00b894,secondary:#55efc4"
                  style={{ width: "30px", height: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={saveHandler}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
