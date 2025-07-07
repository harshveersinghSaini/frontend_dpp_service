
import InputCustom from "@/components/common/InputCustom/InputCustom";
import "./Business_Registration.scss";
import CustomButton from "@/components/common/CustomButton/CommonButton";
import CommonSelect from "@/components/common/CommonSelect/CommonSelect";

const BusinessRegistration = () => {
  return (
  <div className="business-registration">
  <h2>Payment Provider Details</h2>
  <p>Configure your payment service settings</p>

  <div className="business-registration__main">
    <div className="business-registration__form">
      {/* Left Side: Business Details */}
      <div className="form-section">
        <h3>Business Details</h3>
        <InputCustom
          label="Legal Business Name"
          important
          placeholder="Enter your legal business name"
        />
        <InputCustom
          label="Tax Identification Number (TIN)"
          important
          placeholder="Enter Number"
        />
        <CommonSelect label="License Type" required={true} options={[{value: 'cat1', label: 'PAN Card'}]} placeholder="Select Category" />
        <InputCustom
          label="License Number"
          important
          placeholder="Enter your License Number"
        />
      </div>

      {/* Right Side: Registered Business Address */}
      <div className="form-section">
        <h3>Registered Business Address</h3>
        <InputCustom label="Street Address" important placeholder="Building no. , street, etc." />
        <CommonSelect label="City/Municipality" required={true} placeholder="Select City" options={[{value: 'cat1', label: 'Mohali'}]} />
        <CommonSelect label="Province/State" required={true}  placeholder="Select Province" options={[{value: 'cat1', label: 'Punjab'}]} />
        <InputCustom label="Postal Code" important placeholder="Enter postal code" />
        <CommonSelect label="Country" required={true}  placeholder="Select Country"  options={[{ value:'cat1', label:'India'}]}/>
      </div>
    </div>

    {/* Contact Info */}
    <div className="contact-section">
      <h3>Contact Information</h3>
      <InputCustom label="Email Address" important placeholder="Enter your email address" />
      <div className="two-column">
        <InputCustom label="Business Phone Number" important placeholder="9874563210" />
      </div>
    </div>

    {/* Submit Button */}
    <div className="submit-button">
      <CustomButton text="Upload the document" width="263px" height="56px" type="submit" />
    </div>
  </div>
</div>

  );
};

export default BusinessRegistration;
