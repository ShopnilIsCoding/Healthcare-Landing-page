const FAQ = () => {
  return (
    <div className="container mx-auto lg:my-40 my-16 font-inter"data-aos="fade-up">
      <div className=" mb-8">
        <p className="text-sub font-inter rounded-2xl px-5 py-1 border border-[#343268]  w-fit text-center">
          Faq
        </p>
        <h1 className="text-core text-3xl lg:text-4xl  font-inter font-semibold mt-2 lg:mt-5">
          Frequently Asked Question
        </h1>
      </div>
      <div className="collapse collapse-arrow bg-[#ffffffb3] mb-4 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title border-b border-[#4d4c7b36]  bg-[#FFFFF5] pl-8 text-core font-medium text-xl">
          {" "}
          What are your office hours?
        </div>
        <div className="collapse-content">
          <p className="pl-4 py-2 text-sub opacity-60">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#ffffffb3] mb-4 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title border-b border-[#4d4c7b36]  bg-[#FFFFF5] pl-8 text-core font-medium text-xl">
          {" "}
          How can I schedule an appointment?
        </div>
        <div className="collapse-content">
          <p className="pl-4 py-2 text-sub opacity-60">
            You can schedule an appointment by calling our office during
            business hours or by using our online appointment scheduling system
            available on our website. If you are a new patient, please ensure
            you have your insurance information ready and any referral forms if
            applicable. For existing patients, you can also use our patient
            portal to request or change appointments.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#ffffffb3] mb-4 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title border-b border-[#4d4c7b36]  bg-[#FFFFF5] pl-8 text-core font-medium text-xl">
          {" "}
          Do you accept insurance?
        </div>
        <div className="collapse-content">
          <p className="pl-4 py-2 text-sub opacity-60">
            Yes, we accept most major insurance plans. We recommend contacting
            us prior to your appointment to confirm that we accept your specific
            insurance provider. Additionally, you can check with your insurance
            company to understand the coverage of services and whether any
            pre-authorization is needed.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#ffffffb3] mb-4 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title border-b border-[#4d4c7b36]  bg-[#FFFFF5] pl-8 text-core font-medium text-xl">
          {" "}
          What should I bring to my appointment?
        </div>
        <div className="collapse-content">
          <p className="pl-4 py-2 text-sub opacity-60">
            Please bring the following items to your appointment: Any relevant medical records or test results, A list of all medications you are currently taking including over-the-counter drugs and dietary supplements, Your insurance card and a form of photo ID, Any referral letters or authorizations if required
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#ffffffb3] mb-4 ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title border-b border-[#4d4c7b36]  bg-[#FFFFF5] pl-8 text-core font-medium text-xl">
          Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content">
          <p className="pl-4 py-2 text-sub opacity-60">
            Our office hours vary by location, but typically we are open Monday
            through Friday from 8:00 AM to 5:00 PM. Some locations may offer
            extended hours or weekend appointments. Please contact your nearest
            clinic for specific hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
