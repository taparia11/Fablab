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
      title: "STUDENT MEMBERSHIP",
      description:
        "This is only for Students of the SRM Group of Institutions.",
      price: "1499",
      paymentLink: "https://google.com",
    },
    {
      key: 2,
      title: "TECH TEAM MEMBERSHIP",
      description:
        "This is only for SRMIST's official technical team members. It's an individual team member's membership.",
      price: "499",
      paymentLink: "https://google.com",
    },
    {
      key: 3,
      title: "STARTUP MEMBERSHIP",
      description:
        "This is only for SIIC incubated startups and NewGen IEDC Supported projects. It's an individual team member's membership.",
      price: "499",
      paymentLink: "https://google.com",
    },
    {
      key: 4,
      title: "FACULTY MEMBERSHIP",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "1499",
      paymentLink: "https://google.com",
    },
    {
      key: 5,
      title: "MEMBERSHIP FOR SRM ALUMNI",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "1999",
      paymentLink: "https://google.com",
    },
    {
      key: 6,
      title: "MEMBERSHIP FOR EXTERNAL MEMBER",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "400",
      paymentLink: "https://google.com",
    },
    {
      key: 7,
      title: "A DAY PASS",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "400",
      paymentLink: "https://google.com",
    },
    {
      key: 8,
      title: "A WEEK PASS",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "400",
      paymentLink: "https://google.com",
    },
    {
      key: 9,
      title: "FABLAB SERVICE PAYMENT",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "200",
      paymentLink: "https://google.com",
    },
    {
      key: 10,
      title: "EXTERNAL MEMBERSHIP",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "2999",
      paymentLink: "https://google.com",
    },
    {
      key: 11,
      title: "STARTUP INCUBATION FEE",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "2999",
      paymentLink: "https://google.com",
    },
    {
      key: 11,
      title: "PRE-INCUBATEE MEMBERSHIP FEE",
      description:
        "This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions.",
      price: "3000",
      paymentLink: "https://google.com",
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
