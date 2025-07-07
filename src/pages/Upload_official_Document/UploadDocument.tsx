import React, { useState } from "react";
import "./UpladDocument.scss";
import CustomButton from "@/components/common/CustomButton/CommonButton";
import shieldIcon from "@/assets/shield.png";
import { MdOutlineFileDownload } from "react-icons/md";
import PendingUploadPop from "./Upload-Pop/Pending/Pending_Upload_Pop";

const documents = [
  {
    title: "BIR Certificate of Registration (Form 2303)",
    required: true,
    desc: "This document confirms your registration With the Bureau Of Internal Revenue and contains your Taxpayer Identification Number (TIN).",
    extra: null,
    formats: "Accepted formats: PDF, JPG, PNG (Max: 10MB)",
  },
  {
    title: "Mayor’s Business Permit or DTI Certificate",
    required: true,
    desc: "This document proves your business is legally authorized to operate in your locality.",
    // extra: <span className={styles.docExtra}>e.g. 2305-251234</span>,
    formats: "Accepted formats: PDF, JPG, PNG (Max: 10MB)",
  },
  {
    title: "VAT Certificate or BIR Acknowledgment",
    required: true,
    desc: "This document confirms your Value Added Tax registration status within the BIR.",
    extra: null,
    formats: "Accepted formats: PDF, JPG, PNG (Max: 10MB)",
  },
  {
    title: "Platform Affiliation Letter",
    required: true,
    desc: "This document confirms your affiliation with the platform you selected in the previous step.",
    extra: null,
    formats: "Accepted formats: PDF, JPG, PNG (Max: 10MB)",
  },
  {
    title: "Valid Government ID of Authorized Representative",
    required: true,
    desc: "Any government-issued ID (e.g., Passport, Driver’s License, UMID) of the authorized representative.",
    extra: null,
    formats: "Accepted formats: PDF, JPG, PNG (Max: 10MB)",
  },
];

const UploadDocument = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <div className="uploadPage">
      <div className="header">
        <h2>Upload Official Documents</h2>
        <p>Upload Official Documents for Tax Compliance</p>
      </div>
      <div className="uploadPage__main">
        <div className="infoBox">
          <img src={shieldIcon} alt="shield" />
          <span>
            <b>Document Security Information:</b> <br />
            All your sensitive records are encrypted and kept safe. Only you and
            personnel with real access to your account can see uploaded
            contents. Please ensure all documents are valid, clear, complete,
            and the right document.
          </span>
        </div>
        {documents.map((doc, idx) => (
          <div className="docCard" key={idx}>
            <div className="docInfo">
              <div className="docTitle">
                {doc.title}
                {doc.required && <span className="required">*</span>}
              </div>
              <div className="docDesc">{doc.desc}</div>
              {doc.extra}
            </div>
            <div className="docActions">
              <CustomButton
                text="Upload File"
                width="150px"
                height="40px"
                icon={
                  <MdOutlineFileDownload
                    style={{ marginRight: 8, fontSize: 20 }}
                  />
                }
              />

              <div className="formats">{doc.formats}</div>
            </div>
          </div>
        ))}
        <div className="saveButton">
          <CustomButton
            text="Save & Continue"
            className="btn-Save"
            onClick={() => setshowModal(true)}
          />
        </div>
      </div>
      {showModal && <PendingUploadPop onClose={() => setshowModal(false)} />}
    </div>
  );
};

export default UploadDocument;
