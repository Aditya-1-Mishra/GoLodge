import React from "react";

const ContactUS = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 justify-between overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
          <div className="text-[#0e141b] flex size-12 shrink-0 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Contact Us
          </h2>
        </div>

        {/* Intro */}
        <h2 className="text-[#0e141b] text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          We're here to help
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Reach out to us with any questions or inquiries. Our team is dedicated
          to providing exceptional service and ensuring your stay is
          unforgettable.
        </p>

        {/* Contact Information */}
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          Contact Information
        </h3>

        {[
          {
            label: "Address",
            value: "123 Luxury Lane, City Center, State, 12345",
            icon: (
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            ),
          },
          {
            label: "Phone",
            value: "+1 (555) 123-4567",
            icon: (
              <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
            ),
          },
          {
            label: "Email",
            value: "reservations@luxuryhotel.com",
            icon: (
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
            ),
          },
          {
            label: "WhatsApp",
            value: "+1 (555) 987-6543",
            icon: (
              <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2"
          >
            <div className="text-[#0e141b] flex items-center justify-center rounded-lg bg-[#e7edf3] shrink-0 size-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                {item.icon}
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                {item.label}
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                {item.value}
              </p>
            </div>
          </div>
        ))}

        {/* Map */}
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          Map
        </h3>
        <div className="flex px-4 py-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASwYQUN3-jy1VJPDWFJFt_U25OdwKaOlxEFCOtHrJElHF1l9eOdCV7Q2ie5xovol96LUNjObT8T3EXhgX_WoP5S48yzhVwHwO5G1jor99MfaxAQ3D-wNMufXJn8T760AYakOa1J_bQRMOC8HTIJZRuUcoa_7L0C-oIdpvt2ojBptJP4ohQ9a6T8ws16-dI_URsNJ3LXS7X4ksTHNbAYlmRf4NKagaDsP882SZA5Qv9JqIcQ0VSrvyhjoWKwMdFKXNzR-MzZNbgwhqu")',
            }}
          ></div>
        </div>

        {/* Inquiry Form */}
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          Inquiry Form
        </h3>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          For bookings, event inquiries, or general questions, please fill out
          the form below. We'll get back to you promptly.
        </p>

        {["Your Name", "Your Email", "Subject"].map((placeholder, idx) => (
          <div
            key={idx}
            className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
          >
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder={placeholder}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] bg-[#e7edf3] h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal focus:outline-none focus:ring-0 border-none"
              />
            </label>
          </div>
        ))}

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Your Message"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e141b] bg-[#e7edf3] min-h-36 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal focus:outline-none focus:ring-0 border-none"
            ></textarea>
          </label>
        </div>

        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 flex-1 bg-[#1773cf] text-slate-50 text-sm font-bold leading-normal">
            Submit
          </button>
        </div>

        {/* Customer Support Hours */}
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          Customer Support Hours
        </h3>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Our team is available to assist you via phone or email during the
          following hours: Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM
          - 4:00 PM Sunday: Closed
        </p>

        {/* Social Media */}
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight px-4 pb-2 pt-4">
          Social Media
        </h3>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Connect with us on social media for the latest updates and exclusive
          offers:
        </p>
        <div className="gap-2 px-4 flex flex-wrap justify-start">
          {["Facebook", "Instagram", "Twitter"].map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-slate-50 py-2.5 text-center w-20"
            >
              <div className="rounded-full bg-[#e7edf3] p-2.5">
                <div className="text-[#0e141b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    {/* Icons left as-is from original */}
                  </svg>
                </div>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">
                {platform}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-12 px-5 flex-1 bg-[#1773cf] text-slate-50 text-base font-bold">
            Book Now
          </button>
        </div>
        <div className="h-5 bg-slate-50"></div>
      </div>
    </div>
  );
};

export default ContactUS;
