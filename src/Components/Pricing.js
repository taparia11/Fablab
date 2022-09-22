import React from "react";

const Pricing = () => {
  const mystyle = {
    height: "500px",
    borderRadius: "51px",
    background: "linear-gradient(145deg, #ffffff, #d6d6d9)",
    boxShadow: "13px 13px 5px #626263, -13px -13px 5px #ffffff",
  };

  const pricingDetails = [
    {
      key: 1,
      title: "DAY PASS",
      description:
        "Access to FABLAB for 24 hours on a working day.",
      price: "99",
      paymentLink: "https://rzp.io/l/DayPass99",
    },
    {
      key: 2,
      title: "WEEK PASS",
      description:
        "Access to Fablab for a Week during working days (Starts from the day of subscription & this is for 6 continuous days except for holidays).",
      price: "299",
      paymentLink: "https://rzp.io/l/WeekPass299",
    },
    {
      key: 3,
      title: "MONTHLY MEMBERSHIP",
      description:
        "Access to Fablab for a month during working days (Starts from the day of subscription & this is for 30 continuous days except for holidays).",
      price: "499",
      paymentLink: "https://rzp.io/l/MonthlyMembership499",
    },
    {
      key: 4,
      title: "PRE INCUBATEE MEMBERSHIP",
      description:
        "Access to FABLAB while being a pre-incubatee for startups.",
      price: "3000",
      paymentLink: "https://rzp.io/l/Pre-IncubateeMembershipFee",
    },
    {
      key: 5,
      title: "STARTUP INCUBATION FEE",
      description:
        "Access to FABLAB for all the activities entailing startups.",
      price: "5000",
      paymentLink: "https://rzp.io/l/siiecmembershipfee",
    },
    {
      key: 6,
      title: "STUDENT MEMBERSHIP",
      description:
        "This is only for Students of the SRM Group of Institutions.",
      price: "1499",
      paymentLink: "https://rzp.io/l/StudentMembership1499",
    },
    {
      key: 7,
      title: "ALUMNI MEMBERSHIP",
      description:"This is applicable only for Alumni of the SRM Group of Institutions.",
      price: "1999",
      paymentLink: "https://rzp.io/l/Alumnimembership1999",
    },
    {
      key: 8,
      title: "EXTERNAL MEMBERSHIP",
      description:"Access to Fablab during its working hours for 6 months (Starts from Date of Subscription). 25% discount on usage of special machines.",
      price: "2999",
      paymentLink: "https://rzp.io/l/externalmembership2999",
    },
    {
      key: 9,
      title: "FACULTY & RESEARCH SCHOLAR MEMBERSHIP",
      description:"Access to Fablab during its working hours for 6 months (Starts from Date of Subscription). 25% discount on usage of special machines.",
      price: "1499",
      paymentLink: "https://rzp.io/l/facultymembership1499",
    },
    {
      key: 10,
      title: "STARTUP MEMBERSHIP",
      description:"This is only for SIIC incubated startups and NewGen IEDC Supported projects. It's an individual team member's membership.",
      price: "499",
      paymentLink: "https://rzp.io/l/StartupsMembership499",
    },
    {
      key: 11,
      title: "TECH TEAM MEMBERSHIP",
      description:"This is only for SIIC incubated startups and NewGen IEDC Supported projects. It's an individual team member's membership.",
      price: "499",
      paymentLink: "https://rzp.io/l/TechTeamMembership499",
    },
    {
      key: 12,
      title: "FABLAB SERVICE PAYMENT",
      description:"This subscription varies from ₹5 to ₹200.",
      price: "200",
      paymentLink: "https://rzp.io/l/fablabservicepayment",
    },
  ];

  return (
    <>
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Pricing</h2>
            <p>
              All the membership plans are valid for six months from the date of
              subscription. For more information, get in touch with us today.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6">
            {pricingDetails.map((item) => {
              return (
                <>
                  <div
                    className="w-full shadow-md rounded-xl"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    key={item.key}
                  >
                    <div>
                      <div className="bg-[#C2FBFF38] p-6 w-full text-center">
                        <h1 className="font-semibold text-2xl h-14 px-10 flex items-center justify-center">
                          {item.title}
                        </h1>
                      </div>
                      <div>
                        <p className="p-6">{item.description}</p>
                        <div className="flex flex-col md:flex-row w-full justify-between p-6">
                          <div className="flex flex-row">
                            <p className="text-sm">₹</p>
                            <p className="font-semibold text-3xl">
                              {item.price}
                            </p>
                          </div>
                          <a
                            href={item.paymentLink}
                            target="_blank"
                            style={{ borderWidth: "1px" }}
                            className="rounded-md hover:bg-[#19939C] hover:border-[#19939C] hover:text-white border-[#04DD78] flex items-center justify-center px-3 py-2 my-2"
                            rel="noopener noreferrer"
                          >
                            <button>Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
