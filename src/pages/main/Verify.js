import React, { useState } from "react";
import loginSvg from "../../assets/img/about-1.png";
import {  useFirebase } from "react-redux-firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector } from "react-redux";


const MySwal = withReactContent(Swal);

function Verify() {
  const firebase = useFirebase();
  

  const [formData, setFormData] = useState({
    code: "",
    textChange: "Verify",
  });


  const user = useSelector((state) => state.firebase.profile)

  const { code, textChange } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, textChange: "Submitting..." });
    if (!code) {
      setFormData({ ...formData, textChange: "Verify" });
      return MySwal.fire({
        title: "Error",
        text: "Verification Code required",
        icon: "error",
        color: "orange",
        timer: 6000,
        showCloseButton: true,
      });
    }

    if (user.verificationCode !== code) {
      setFormData({ ...formData, textChange: "Verify" });
      return MySwal.fire({
        title: "Error",
        text: "Wrong verification Code",
        icon: "error",
        color: "red",
        timer: 6000,
        showCloseButton: true,
      });
    }
    await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        verified: true,
      });
    MySwal.fire({
      title: "Success",
      text: "Account Successfully verified",
      color: "green",
      icon: "success",
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      window.location.assign("/user/dashboard");
    });
    
  };

 

  return (
    <div className="min-h-screen footer-bg  homepage-3  flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-[#322194] shadow sm:rounded-lg flex justify-center flex-1 flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
              Verify Account
            </h1>

            <form className="w-full flex-1 mt-8 " onSubmit={handleSubmit}>
              <div className="mx-auto max-w-xl  relative  ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-8"
                  type="text"
                  placeholder="Verification Code"
                  name="code"
                  onChange={handleChange}
                  value={code}
                />

                <button
                  disabled={textChange === "Submitting..."}
                  type="submit"
                  className="more-btn w-full  mt-8"
                >
                  <i className="fas fa-sign-in-alt fa 1x w-6 text-white -ml-2" />
                  <span className="ml-3">{textChange}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center lg:flex hidden">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${loginSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Verify;
