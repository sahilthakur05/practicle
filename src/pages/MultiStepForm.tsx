// Q5: Multi-Step Form with Validation
// Build your solution here — UI only, add logic yourself

import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  address: string;
  city: string;
  zipCode: string;
}

interface Errors {
  [key: string]: string;
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field as user types
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Errors = {};
    if (formData.address.trim().length === 0) {
      newErrors.address = "Address is required";
    }
    if (formData.city.trim().length === 0) {
      newErrors.city = "City is required";
    }
    if (formData.zipCode.trim().length === 0) {
      newErrors.zipCode = "Zip code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert(
      `Form submitted!\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nAddress: ${formData.address}\nCity: ${formData.city}\nZip: ${formData.zipCode}`,
    );
  };

  const getStepClass = (step: number) => {
    if (step === currentStep) return "msf-step active";
    if (step < currentStep) return "msf-step done";
    return "msf-step";
  };

  return (
    <div className="msf-container">
      <div className="msf-steps">
        <div className={getStepClass(1)}>
          <span className="msf-step-num">1</span>
          <span className="msf-step-label">Personal Info</span>
        </div>
        <div className="msf-step-line" />
        <div className={getStepClass(2)}>
          <span className="msf-step-num">2</span>
          <span className="msf-step-label">Address</span>
        </div>
        <div className="msf-step-line" />
        <div className={getStepClass(3)}>
          <span className="msf-step-num">3</span>
          <span className="msf-step-label">Review</span>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="msf-form">
          <div className="msf-field">
            <label className="msf-label">Full Name</label>
            <input
              className="msf-input"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
            {errors.fullName && (
              <span className="msf-error">{errors.fullName}</span>
            )}
          </div>
          <div className="msf-field">
            <label className="msf-label">Email</label>
            <input
              className="msf-input"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <span className="msf-error">{errors.email}</span>}
          </div>
          <div className="msf-field">
            <label className="msf-label">Password</label>
            <input
              className="msf-input"
              type="password"
              placeholder="Min 6 characters"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            {errors.password && (
              <span className="msf-error">{errors.password}</span>
            )}
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="msf-form">
          <div className="msf-field">
            <label className="msf-label">Address</label>
            <input
              className="msf-input"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
            {errors.address && (
              <span className="msf-error">{errors.address}</span>
            )}
          </div>
          <div className="msf-field">
            <label className="msf-label">City</label>
            <input
              className="msf-input"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
            {errors.city && <span className="msf-error">{errors.city}</span>}
          </div>
          <div className="msf-field">
            <label className="msf-label">Zip Code</label>
            <input
              className="msf-input"
              type="text"
              placeholder="Enter zip code"
              value={formData.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value)}
            />
            {errors.zipCode && (
              <span className="msf-error">{errors.zipCode}</span>
            )}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="msf-review">
          <h4>Review Your Details</h4>
          <div className="msf-review-row">
            <span className="msf-review-label">Name:</span>
            <span className="msf-review-value">{formData.fullName}</span>
          </div>
          <div className="msf-review-row">
            <span className="msf-review-label">Email:</span>
            <span className="msf-review-value">{formData.email}</span>
          </div>
          <div className="msf-review-row">
            <span className="msf-review-label">Address:</span>
            <span className="msf-review-value">{formData.address}</span>
          </div>
          <div className="msf-review-row">
            <span className="msf-review-label">City:</span>
            <span className="msf-review-value">{formData.city}</span>
          </div>
          <div className="msf-review-row">
            <span className="msf-review-label">Zip:</span>
            <span className="msf-review-value">{formData.zipCode}</span>
          </div>
        </div>
      )}

      <div className="msf-actions">
        {currentStep > 1 && (
          <button className="msf-btn-back" onClick={handleBack}>
            Back
          </button>
        )}
        <button
          className="msf-btn-next"
          onClick={currentStep === 3 ? handleSubmit : handleNext}
        >
          {currentStep === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
