"use client"
import React from 'react'
import { useState } from 'react'

const ChangePassword = () => {

  const [currentpassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const saveHandler = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords didn't match!");
      setNewPassword('');
      setConfirmPassword('');
      return;
    }

    let res = await fetch("/api/add/changepassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentpassword, newPassword }),
    });
    let data = await res.json();
    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message);
      setCurrentPassword('');
      setConfirmPassword('');
      setNewPassword('');
    }
  }

  return (
    <div className='h-full md:w-150 w-120 pl-0 md:mx-auto mx-7 text-xl my-16 p-6 bg-green-200 rounded-lg border-green-500 border-2 overflow-x-hidden'>
      <div className='h-18 p-2 pt-5 pl-4'>Current Password: <input type="password" value={currentpassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder='Current password' name='current' className='mx-auto bg-white text-center rounded-sm w-60 ml-2' />

      </div>
      <div className='h-18 p-4 pt-3'>New Password: <input type="password" placeholder='New password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} name='new' className='bg-white text-center mx-auto rounded-sm ml-9 w-60' />
        {/* <button className='cursor-pointer' onClick={() => { setEditEmailID(!editemailID) }}>
            <lord-icon
              src="https://cdn.lordicon.com/iubtdgvu.json"
              trigger="hover"
              colors="primary:#e8e230,secondary:#e88c30"
              style={{ width: "35px", height: "35px" }}
              className="py-2.5 ml-4">
            </lord-icon>
          </button> */}

      </div>
      <div className='h-18 p-2 pl-4'>Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password' name='confirm' className='bg-white text-center mx-auto rounded-sm ml-2 w-60' />
        {/* <button className='cursor-pointer' onClick={() => {setEditMobile(!editmobile)}}>
            <lord-icon
              src="https://cdn.lordicon.com/iubtdgvu.json"
              trigger="hover"
              colors="primary:#e8e230,secondary:#e88c30"
              style={{ width: "35px", height: "35px" }}
              className="py-2.5 ml-4">
            </lord-icon>
          </button> */}

      </div>
      <div className='flex justify-center mt-2'>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br w-15 h-8 font-medium rounded-lg text-sm ml-4 text-center cursor-pointer mb-2" onClick={saveHandler}>Save</button>
      </div>
    </div>
  )
}

export default ChangePassword
