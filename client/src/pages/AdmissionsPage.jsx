import admissionsImage from "../assets/Admission.JPG";
import admissionsImage2 from "../assets/Admission 1.JPG";

function AdmissionsPage() {
  const handleRedirect = () => {
    // Directly change the location to the Contact Us page
    window.location.href = '/contact';  // Replace with your actual contact-us page route
  };
  return (
    <div>
        <div style={{backgroundImage:`url(${admissionsImage})`}} className="bg-cover bg-center bg-fixed h-[90vh] relative">
        {/* <img
          src={admissionsImage}
          alt="admissions banner"
          className="h-[100%] w-screen object-cover object-bottom"
        /> */}
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          Admissions page
        </span>
      </div>
      <div className="my-20 max-w-screen-lg m-auto flex gap-5">
          <div className="bg-custom-gray flex-grow">
            <div className="bg-custom-yellow w-[30%] text-center p-1">1</div>
            <p className="w-[280px] p-10">The first stage in any enquiry is to complete an enquiry form and return it to the Registrar, who would be happy to assist with any questions.   </p>
          </div>
          <div className="bg-custom-gray flex-grow">
          <div className="bg-custom-yellow w-[30%] text-center p-1">2</div>
            <p className="w-[280px] p-10">We then invite you to visit our school. We offer individual family tours in the mornings during the school week. You would usually meet the Headmaster.
            To officially register for a place please fill the Application Form and pay our Registration Fees. We will guide you through any other documents or assessments that may be required.</p>
          </div>
          <div className="bg-custom-gray flex-grow">
          <div className="bg-custom-yellow w-[30%] text-center p-1">3</div>
            <p className="w-[280px] p-10">We would then write offering a place to your son or daughter. To confirm the place, you are required to accept this place formally and pay the Caution Deposit.</p>
          </div>
      </div>
      <div className="h-[60vh] my-20 max-w-screen-lg m-auto flex justify-between items-center gap-2">
        <div className="flex-1">
          <div className="w-[80%] space-y-4">
          <h2 className="text-xl ">APPLICATION FEES</h2>
          <p>Following your visit to our school, if you are eager to join the KBHS family, you will need to begin the application process. Please complete the application form and return it along with the application fee (see below). This ensures that your child&apos;s name is added to our prospective list for the selected year of entry.</p>
          <button className="bg-custom-green text-white py-2 w-full">Download Fee Structure</button>
          </div>
        </div>
        <div className="flex-1 h-[100%]">
        <img
          src={admissionsImage2}
          alt="admissions 2nd banner"
          className="h-[100%] w-full object-cover object-top"
        />
        </div>
      </div>
      <div className="my-20 max-w-screen-lg m-auto space-y-8">
          <ul className="bg-custom-gray">
            <li className="bg-custom-green text-white flex justify-between"><span className="p-4">Fees-Charges per term</span> <span className="w-[5%] bg-custom-yellow"></span> </li>
            <li className="flex justify-between items-center p-4"> <span>Term One</span> <span>Ksh. 55,000.00</span> </li>
            <li className="flex justify-between items-center p-4"> <span>Term Two</span> <span>Ksh. 45,000.00</span> </li>
            <li className="flex justify-between items-center p-4"> <span>Term Three</span> <span>Ksh. 35,000.00</span> </li>
          </ul>
          <button
              onClick={handleRedirect}
              className="bg-custom-green text-white py-2 px-6">Contact our Admission team</button>
      </div>
    </div>
  )
}

export default AdmissionsPage