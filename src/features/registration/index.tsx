import React, { useState } from "react";
import "./index.scss";
import { CaptchaIcon, TiTick } from "@/assets/icons/index";

import logo from "/Image/logo.png";
import CommonButton from "@/components/common/CustomButton/CommonButton";
import InputCustom from "@/components/common/InputCustom/InputCustom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";

type RegistrationFormInputs = {
  email: string;
  password: string;
};

const Registration: React.FC = () => {
  const { handleSubmit, watch, setValue } = useForm<RegistrationFormInputs>({});

     const [showOtpPopup, setShowOtpPopup] = useState(false);
      const [emailOtp, setEmailOtp] = useState('');
      const [phoneOtp, setPhoneOtp] = useState('');
      const [timer, setTimer] = useState(30);

        // Timer logic for resend
          React.useEffect(() => {
              if (!showOtpPopup) return;
              const interval = setInterval(() => {
                  setTimer((prev) => (prev > 0 ? prev - 1 : 0));
              }, 1000);
              return () => clearInterval(interval);
          }, [showOtpPopup]);

  const onSubmit = (info: RegistrationFormInputs) => {
    console.log("registration info:", info);
  };
   const handleClose = () => {
        setShowOtpPopup(false);
        setTimer(30);
    };

  const password = watch("password") || "";

  const passwordChecklist = [
    { label: "Minimum 12 characters", isValid: password.length >= 12 },
    { label: "At least 1 lowercase letter", isValid: /[a-z]/.test(password) },
    {
      label: "At least 1 special character",
      isValid: /[^A-Za-z0-9]/.test(password),
    },
    { label: "At least 1 uppercase letter", isValid: /[A-Z]/.test(password) },
    { label: "At least 1 number", isValid: /\d/.test(password) },
  ];

  const firstColumn = passwordChecklist.slice(0, 3);
  const secondColumn = passwordChecklist.slice(3);

  const validCount = passwordChecklist.filter((item) => item.isValid).length;
  const strengthClass =
    validCount <= 2 ? "weak" : validCount <= 4 ? "medium" : "strong";

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="registration-container">
        <img className="logo" src={logo} alt="logo" />
        <div className="registration-box">
          <h2 className="reg_head">Become a Part of DTCH Platform</h2>
          <p className="reg_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            provident eos.
          </p>

          <div className="input-group">
            <InputCustom
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              important
              id="email"
              name="email"
              value={watch("email")}
              onChange={(e) => setValue("email", e.target.value)}
            />
          </div>

          <div className="input-group">
            <InputCustom
              type="password"
              label="Create Password"
              placeholder="Enter your password"
              important
              id="password"
              name="password"
              value={watch("password")}
              onChange={(e) => setValue("password", e.target.value)}
            />
          </div>

         

          <div className="password-input-checklist">
            <p>Password must contain: </p>
            <div className="checklist-content">
              <div>
                {firstColumn.map((item, index) => (
                  <div className="checklist-item" key={index}>
                    <>
                      <TiTick
                        color={item.isValid ? "green" : "red"}
                        fontSize={15}
                      />
                      {item.label}
                    </>
                  </div>
                ))}
              </div>
              <div>
                {secondColumn.map((item, index) => (
                  <div className="checklist-item" key={index}>
                    <>
                      <TiTick
                        color={item.isValid ? "green" : "red"}
                        fontSize={15}
                      />
                      {item.label}
                    </>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="captcha-container">
            <div className="captcha-heading">
              <p>Captcha Code </p>
              <img src={CaptchaIcon} alt="captcha" />
            </div>
            <div className="captcha-code-input">
              <div className="input-group">
                <InputCustom placeholder="Enter the code shown above" />
              </div>
            </div>
            <div className="captcha-button-group">
              <CommonButton className="verify" text={"Verify"} height="40px" />
              <CommonButton className="new-code" text={"New Code"}  height="40px" />
              
            </div>
            <div className="help-text">
              <p>
                <em>Can't read the code? Click 'New Code'</em>
              </p>
            </div>
          </div>

          <label className="checkbox">
            <input type="checkbox" /> I am an authorized representative of a
            licensed PSP
          </label>

          <div className="submit-container">
            <CommonButton text={"Continue to verify"} 
            onClick={() => setShowOtpPopup(true)}
            height="56px" />
          </div>

          <div className="login-link">
            Already have account?{" "}
            <Link className="login-account-link" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </form>
     {/* OTP Modal */}
            {showOtpPopup && (
                <div className="otp-modal-backdrop">
                    <div className="otp-modal">
                        <div className="otp-header">
                            <h2>OTP Verification</h2>
                            <button onClick={handleClose}>✕</button>
                        </div>
                        <div className="otp-body">
                            <p className="otp-info">
                                We’ve sent a 6-digit code to your email and phone.<br />
                                Email: <strong>bu****53@gmail.com </strong>and
                                Phone: <strong>********02</strong>
                            </p>

                            {/* Email OTP */}
                            <div className="otp-section">
                                <label>Email Verification Code</label>
                                <OTPInput
                                    value={emailOtp}
                                    onChange={setEmailOtp}
                                    numInputs={6}
                                    containerStyle="otp-box-container"
                                    renderInput={(props) => <input {...props} inputMode="numeric" className='otp-box' />}
                                />
                                <div className="otp-footer">
                                    Didn’t receive code?
                                    <span className="resend-text">
                                        {timer > 0 ? `00:${timer.toString().padStart(2, "0")} Resend` : <span onClick={() => { }}>Resend</span>}
                                    </span>
                                </div>
                            </div>

                            {/* Phone OTP */}
                            <div className="otp-section">
                                <label>Phone Verification Code</label>
                                <OTPInput
                                    value={phoneOtp}
                                    onChange={setPhoneOtp}
                                    numInputs={6}
                                    containerStyle="otp-box-container"
                                    renderInput={(props) => <input {...props} inputMode="numeric" className='otp-box' />}
                                />
                                <div className="otp-footer">
                                    Didn’t receive code?
                                    <span className="resend-text">
                                        {timer > 0 ? `00:${timer.toString().padStart(2, "0")} Resend` : <span>Resend</span>}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
  );
};

export default Registration;
