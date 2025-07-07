
import React from "react";
import "./Success_Upload_Popup.scss";
import successImg from "../../../../assets/successImg.png";
import clockIcon from "../../../../assets/ClockIcon.svg";
import CustomButton from "@/components/common/CustomButton/CommonButton";

interface SuccessPopupProps {
    onClose: () => void;
    referenceNumber?: string;
    dateTime?: string;
    onContinue?: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
    onClose,
    referenceNumber = "BIR–2023–07–0042",
    dateTime = "Nov. 15, 2024 | 14:32:00",
    onContinue
}) => {

    return (
        <div className="success-modal-backdrop">
            <div className="success-modal">
                <div className="close-btn">
                    <div className="close-header">
                        <button className="close-btnIcon" onClick={onClose}>✕</button>
                    </div>

                </div>

                <div className="success-icon-wrapper">
                    <div className="success-icon">
                        <img src={successImg} alt="" />
                    </div>
                </div>

                <h2 className="success-title">Success!  🎉</h2>
                <p className="success-msg">Your documents have been submitted successfully</p>

                <span className="pending-status"><img src={clockIcon} alt="" /> Pending Verification</span>

                <div className="info-box">
                    <div className="info-box__ref-num"><p>Reference Number:</p> {referenceNumber}</div>
                    <div className="info-box__ref-num"><p>Submission Date & Time:</p> {dateTime}</div>
                    <div className="info-box__ref-num"><p>Estimated Processing Time:</p> 3–5 business days</div>
                </div>

                <div className="toggle-wrapper">
                    <label>Receive notifications about your submission status</label>
                    <label className="switch">
                        <input type="checkbox" defaultChecked />
                        <span className="slider round"></span>
                    </label>
                </div>

                <CustomButton text="Continue" className="continue-btn" onClick={onContinue || onClose} />
            </div>
        </div>
    );
};

export default SuccessPopup;
