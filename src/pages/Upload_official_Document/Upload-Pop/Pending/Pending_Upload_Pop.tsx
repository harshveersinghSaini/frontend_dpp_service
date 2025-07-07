import CustomButton from "@/components/common/CustomButton/CommonButton";
import warningIcon from '@/assets/warningIcon.svg';
import './Pending_Upload_Pop.scss';
import ClockIcon from  '@/assets/ClockIcon.svg'
import { MdOutlineFileDownload } from "react-icons/md"
interface Props {
  onClose: () => void;
}

const PendingUploadPop: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="pending-overlay">
      <div className="pending-pop">
        {/* Header Section */}
        <div className="pending-pop__header">
          <button className="close-btn" onClick={onClose}>×</button>
          <img src={warningIcon} alt="Pending Icon" />
          <h2>Pending!</h2>
          <p>Your account setup is almost complete—submit documents at your convenience.</p>
          <span className="status-badge"> <img src={ClockIcon} alt="" className="clockicon" />Pending Verification</span>
        </div>

        {/* Requirements */}
        <div className="pending-pop__requirements">
          <div className="card card--error">
            <h4>❌ Missing: Updated License Certificate</h4>
            <p>Your license certificate has expired. Please upload an updated version.</p>
            <CustomButton text="Upload Correction" width="100%" height="40px" icon={<MdOutlineFileDownload style={{ marginRight: 8, fontSize: 20 }}/>} />
          </div>
          <div className="card card--error">
            <h4>❌ Clarify: Name mismatch in BIR Registration Certificate</h4>
            <p>Your BIR Registration Certificate doesn’t match name on POA documents.</p>
            <CustomButton text="Upload Correction" width="100%" height="40px" icon={<MdOutlineFileDownload style={{ marginRight: 8, fontSize: 20 }}/>} />
          </div>
          <div className="card card--success">
            <h4>✅ Approved: Business Permit</h4>
            <p>Your business permit has been verified successfully.</p>
          </div>
          <div className="card card--success">
            <h4>✅ Approved: Proof of Address</h4>
            <p>Your business address verification is complete.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pending-pop__footer">
          <CustomButton text="Continue" width="100%" height="56px" />
        </div>
      </div>
    </div>
  );
};

export default PendingUploadPop;
