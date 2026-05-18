import { Button } from "#components/ui/button.jsx";
import "../App.css";
import Inputs from "#components/Inputs.jsx";
import DatePicker from "#components/DatePicker.jsx";
import DragFile from "#components/DragFile.jsx";
import DropDown from "#components/DropDown.jsx";

function ReinForm() {
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
              />
            </div>
            <div>
              <Inputs
                fieldName={"Student Code"}
                subFieldName={""}
                placeholder={"Enter student code here"}
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
              />
            </div>

            {/* Row 2 - Name fields */}
            <div>
              <Inputs
                fieldName={"First Name"}
                subFieldName={""}
                placeholder={"Enter first name"}
              />
            </div>
            <div>
              <Inputs
                fieldName={"Middle Name"}
                subFieldName={""}
                placeholder={"Enter middle name"}
              />
            </div>
            <div>
              <Inputs
                fieldName={"Last Name"}
                subFieldName={""}
                placeholder={"Enter last name"}
              />
            </div>

            {/* Row 3 */}
            <div>
              <Inputs
                fieldName={"Last School Year Attended"}
                subFieldName={""}
                placeholder={"Enter last school year"}
              />
            </div>
            <div>
              <DropDown
                fieldName={"Last Semester Attended"}
                placeholder={"Select semester"}
                options={["1st Semester", "2nd Semester", "Summer"]}
              />
            </div>

            {/* Row 5 */}
            <div>
              <DatePicker 
                fieldName={"Date of LOA"}
                subFieldName={""}
              />
            </div>

            {/* Reason for LOA (Full Width) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Inputs
                fieldName={"Reason for LOA"}
                placeholder={"Enter Reason for LOA here"}
                isTextarea={true}
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
      </main>
    </div>
  );
}

export default ReinForm;