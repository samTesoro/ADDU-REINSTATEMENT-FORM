import { useState } from "react";
import { Button } from "#components/ui/button.jsx";
import "../App.css";
import Inputs from "#components/Inputs.jsx";
import DatePicker from "#components/DatePicker.jsx";
import DragFile from "#components/DragFile.jsx";
import DropDown from "#components/DropDown.jsx";
import { DialogDemo } from "#components/ConfirmModal.jsx";

function ReinForm() {
  const [formData, setFormData] = useState({
    email: "",
    studentCode: "",
    currentCourse: "",
    firstName: "",
    middleName: "",
    lastName: "",
    lastSchoolYear: "",
    lastSemester: "",
    dateOfLoa: undefined,
    reason: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSelect = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.studentCode.trim()) {
      nextErrors.studentCode = "Student code is required.";
    }

    if (!formData.currentCourse) {
      nextErrors.currentCourse = "Current course is required.";
    }

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formData.middleName.trim()) {
      nextErrors.middleName = "Middle name is required.";
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!formData.lastSchoolYear.trim()) {
      nextErrors.lastSchoolYear = "Last school year is required.";
    }

    if (!formData.lastSemester) {
      nextErrors.lastSemester = "Last semester attended is required.";
    }

    if (!formData.dateOfLoa) {
      nextErrors.dateOfLoa = "Date of LOA is required.";
    }

    if (!formData.reason.trim()) {
      nextErrors.reason = "Reason for LOA is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleConfirm = () => {
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
  };

  const handleClear = () => {
    setFormData({
      email: "",
      studentCode: "",
      currentCourse: "",
      firstName: "",
      middleName: "",
      lastName: "",
      lastSchoolYear: "",
      lastSemester: "",
      dateOfLoa: undefined,
      reason: "",
    });
    setErrors({});
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full overflow-y-auto px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6 sm:py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-2xl font-bold mb-6" style={{ fontFamily: "Trajan Pro Regular" }}>
            REINSTATEMENT FORM
          </h1>

          {/* Grid Layout for Form Fields - stacks on mobile, grows to 2 cols, then 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Row 1 */}
            <div>
              <Inputs
                fieldName={"Email"}
                subFieldName={""}
                placeholder={"Enter email here"}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                error={errors.email}
              />
            </div>
            <div>
              <Inputs
                fieldName={"Student Code"}
                subFieldName={""}
                placeholder={"Enter student code here"}
                name="studentCode"
                value={formData.studentCode}
                onChange={handleChange("studentCode")}
                error={errors.studentCode}
              />
            </div>
            <div>
              <DropDown
                fieldName={"Current Course"}
                placeholder={"Select a course"}
                options={[
                  "BS Tourism",
                  "BS Accountancy",
                  "BS Business Administration",
                  "BS Information Technology",
                  "BS Nursing",
                ]}
                value={formData.currentCourse}
                onValueChange={handleSelect("currentCourse")}
                error={errors.currentCourse}
              />
            </div>

            {/* Row 2 - Name fields */}
            <div>
              <Inputs
                fieldName={"First Name"}
                subFieldName={""}
                placeholder={"Enter first name"}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                error={errors.firstName}
              />
            </div>
            <div>
              <Inputs
                fieldName={"Middle Name"}
                subFieldName={""}
                placeholder={"Enter middle name"}
                name="middleName"
                value={formData.middleName}
                onChange={handleChange("middleName")}
                error={errors.middleName}
              />
            </div>
            <div>
              <Inputs
                fieldName={"Last Name"}
                subFieldName={""}
                placeholder={"Enter last name"}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                error={errors.lastName}
              />
            </div>

            {/* Row 3 */}
            <div>
              <Inputs
                fieldName={"Last School Year Attended"}
                subFieldName={""}
                placeholder={"Enter last school year"}
                name="lastSchoolYear"
                value={formData.lastSchoolYear}
                onChange={handleChange("lastSchoolYear")}
                error={errors.lastSchoolYear}
              />
            </div>
            <div>
              <DropDown
                fieldName={"Last Semester Attended"}
                placeholder={"Select semester"}
                options={["1st Semester", "2nd Semester", "Summer"]}
                value={formData.lastSemester}
                onValueChange={handleSelect("lastSemester")}
                error={errors.lastSemester}
              />
            </div>

            {/* Row 5 */}
            <div>
              <DatePicker 
                fieldName={"Date of LOA"}
                subFieldName={""}
                value={formData.dateOfLoa}
                onChange={(date) => setFormData((prev) => ({ ...prev, dateOfLoa: date }))}
                error={errors.dateOfLoa}
              />
            </div>

            {/* Reason for LOA (Full Width) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Inputs
                fieldName={"Reason for LOA"}
                placeholder={"Enter Reason for LOA here"}
                isTextarea={true}
                name="reason"
                value={formData.reason}
                onChange={handleChange("reason")}
                error={errors.reason}
              />
            </div>

            {/* Upload Supporting Documents (Optional) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="pb-2">
                <h2 className="text-sm">Upload Supporting Documents</h2>
              </div>
              <DragFile maxFiles={5} maxSize={50 * 1024 * 1024} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
            <Button
              variant="outline"
              className="w-full sm:w-32 md:w-28 h-10"
              onClick={handleClear}
              type="button"
            >
              Clear
            </Button>
            <DialogDemo
              onConfirm={handleConfirm}
              triggerClassName="text-white w-full sm:w-40 md:w-32 h-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ReinForm;