"use client"
import React from 'react';
import {useState, useEffect} from 'react';

const Profile = () => {
  const [username, setUsername] = useState('')
  const [emailID, setEmailID] = useState('');
  const [mobile, setMobile] = useState('');

  const [editemailID, setEditEmailID] = useState(false);
  const [editmobile, setEditMobile] = useState(false);


  const findData = async()=>{
   let res = await fetch("/api/add/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({setUsername}),
    });
    let data = await res.json();
    setUsername(data.username);
    setEmailID(data.emailID);
    setMobile(data.mobile);
  }
  useEffect(() => {
    findData();
  }, []);
 
  const saveHander = async () => {
    let res = await fetch("/api/add/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({mobile, emailID}),
    });
    let data = await res.json();
    console
    findData();
  }
  // let res = await fetch("/api/add/login", {
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ username, password, role }),
  //       });
  //       let data = await res.json()
  return (
    <>

      <div className='h-full md:w-150 w-120 pl-0 md:mx-auto mx-7 text-xl my-16 p-6 bg-green-200 rounded-lg border-green-500 border-2 overflow-x-hidden'>
        <div className='h-18 p-2 pt-5'>Username: <input type="text" value={username} readOnly placeholder='Username' name='username' className='mx-auto bg-white text-center rounded-sm w-60 ml-2' />


        </div>
        <div className='h-18 p-2'>Email ID: <input type="emailID" value={emailID} readOnly={!editemailID} onChange={(e) => setEmailID(e.target.value)} placeholder='Email ID' name='emailID' className='bg-white text-center mx-auto rounded-sm ml-6 w-60' />
          <button className='cursor-pointer' onClick={() => { setEditEmailID(!editemailID) }}>
            <lord-icon
              src="https://cdn.lordicon.com/iubtdgvu.json"
              trigger="hover"
              colors="primary:#e8e230,secondary:#e88c30"
              style={{ width: "35px", height: "35px" }}
              className="py-2.5 ml-4">
            </lord-icon>
          </button>

        </div>
        <div className='h-18 p-2'>Mobile no: <input type="text" value={mobile} readOnly={!editmobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile No.' name='mobile' className='bg-white text-center mx-auto rounded-sm ml-2 w-60' />
          <button className='cursor-pointer' onClick={() => {setEditMobile(!editmobile)}}>
            <lord-icon
              src="https://cdn.lordicon.com/iubtdgvu.json"
              trigger="hover"
              colors="primary:#e8e230,secondary:#e88c30"
              style={{ width: "35px", height: "35px" }}
              className="py-2.5 ml-4">
            </lord-icon>
          </button>

        </div>
        <div className='flex justify-center mt-2'>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br w-15 h-8 font-medium rounded-lg text-sm ml-4 text-center cursor-pointer mb-2" onClick={saveHander}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
