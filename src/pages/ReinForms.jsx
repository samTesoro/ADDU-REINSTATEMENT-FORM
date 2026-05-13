import { Button } from "#components/ui/button.jsx";
import "../App.css";
import Inputs from "#components/Inputs.jsx";
import DatePicker from "#components/DatePicker.jsx";

function ReinForm() {
  return (
    <div className="w-full">
      <div className="w-full px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: "Trajan Pro" }}>REINSTATEMENT FORM</h1>

          {/* Grid Layout for Form Fields with responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Row 1 */}
            <div>
              <Inputs
                fieldName={"Email"}
                subFieldName={"Ex. example@addu.edu.ph"}
                placeholder={"Enter email here"}
              ></Inputs>
            </div>
            <div>
              <Inputs
                fieldName={"ID Number"}
                subFieldName={"Ex. 148456"}
                placeholder={"Enter ID number here"}
              ></Inputs>
            </div>

            {/* Row 2 */}
            <div>
              <Inputs
                fieldName={"Name"}
                placeholder={"Enter Name here"}
              ></Inputs>
            </div>
            <div>
              <Inputs
                fieldName={"Current Course"}
                subFieldName={"BS Tourism"}
                placeholder={"Select a course"}
                isSelect={true}
                options={[
                  "BS Tourism",
                  "BS Accountancy",
                  "BS Business Administration",
                  "BS Information Technology",
                  "BS Nursing",
                ]}
              ></Inputs>
            </div>

            {/* Row 3 */}
            <div>
              <Inputs
                fieldName={"Last Semester Attended"}
                subFieldName={"Ex. 1st & 2026"}
                placeholder={"Enter Last Semester Attended"}
              ></Inputs>
            </div>

            <div>
              <DatePicker 
                fieldName={"Date of LOA"}
                subFieldName={"Select date"}
              ></DatePicker>
            </div>

            {/* Row 4 - Reason for LOA (Full Width) */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <Inputs
                fieldName={"Reason for LOA"}
                placeholder={"Enter Reason for LOA here"}
                isTextarea={true}
              ></Inputs>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
            <Button variant="outline" className="w-full sm:w-32 md:w-28 h-10">
              Clear
            </Button>
            <Button
              variant="default"
              style={{ backgroundColor: "#2F3590" }}
              className="text-white w-full sm:w-40 md:w-32 h-10"
            >
              Submit
            </Button>
          </div>
        </div>
    </div>
  );
}

export default ReinForm;