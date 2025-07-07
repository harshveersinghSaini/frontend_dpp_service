import React, { useState } from 'react';
import './index.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginWithEmailSchema } from '@/schema/login.schema';
import Commonbutton from '@/components/common/CustomButton/CommonButton';
import InputCustom from '@/components/common/InputCustom/InputCustom';
import logo from '/Image/logo.png';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import '../Otp_popup.scss';

type LoginFormInputs = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const { handleSubmit, register } = useForm<LoginFormInputs>({
        resolver: yupResolver(loginWithEmailSchema()),
    });

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

    const onSubmit = (data: LoginFormInputs) => {
        console.log('Login Data:', data);
        setShowOtpPopup(true);
    };

    const handleClose = () => {
        setShowOtpPopup(false);
        setTimer(30);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="login-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="login-box">

                        <h1 className="login-head">Welcome Back to Digital Payment Provider Panel</h1>
                        <p className="login-sub">
                            Lorem ipsum dolor sit amet consectetur. Ipsum mollis orci volutpat
                            elementum.
                        </p>

                        <div className="input-group">
                            <InputCustom
                                type="email"
                                label="Email Address"
                                placeholder="Enter your email"
                                important
                                id="email"
                                {...register("email")}
                            />
                        </div>

                        <div className="input-group">
                            <InputCustom
                                type="password"
                                label="Create Password"
                                placeholder="Enter your password"
                                important
                                id="password"
                                {...register("password")}
                            />
                        </div>

                        <div className="forgot-password">Forgot Password?</div>

                        <div >
                            <Commonbutton
                                text="Continue To Verify"
                                className="login-btn"
                                onClick={() => setShowOtpPopup(true)}
                                type="button"
                            />
                        </div>

                        <div className="signup-link">
                            Don’t have any account? <Link className='create-account-link' to="/signup">Create an account</Link>
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
                                <OtpInput
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
                                <OtpInput
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

export default LoginForm;