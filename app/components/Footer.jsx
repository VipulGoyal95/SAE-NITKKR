"use client"
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const unitydrivePage = pathname.includes('/saeunitydrive');
  const crowdfundingPage = pathname.includes('/crowdfunding');
  const form = pathname.includes('/crowdfunding/form');
  const payment = pathname.includes('/crowdfunding/payment');
  const thankyou = pathname.includes('/crowdfunding/thankyou');
  const isblue = unitydrivePage || crowdfundingPage || form || payment || thankyou;

  return (
    <footer className={`${isblue ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-black' } text-gray-300 py-16 px-6 relative`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="opacity-5">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            ></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 blur-3xl bg-blue-500 opacity-10 rounded-full"></div>
        {/* <div className="absolute -top-24 -right-24 w-96 h-96 blur-3xl bg-purple-500 opacity-10 rounded-full"></div> */}
      </div>

      <div className="max-w-7xl mx-auto glass-effect backdrop-blur-sm rounded-2xl p-8 border border-gray-800 bg-black/30 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group w-[40%] max-[1024px]:w-fit">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative bg-black rounded-full p-1">
                  <img
                    src="/assets/images/sae-logo.webp"
                    alt="SAE NITKKR Logo"
                    className="h-14"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">SAE NITKKR</h2>
                <p className="text-blue-400 text-sm font-light tracking-wider">
                  Driving Innovation Forward
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pl-1 border-l-2 border-blue-500 ml-1">
            A student-driven club at NIT Kurukshetra focused on advancing mobility engineering through innovation, design, and the thrill of racing.
            </p>
          </div>

          {/* Explore US */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                ></path>
              </svg>
              Explore US
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/accelerons", label: "Team Accelerons" },
                { href: "/nitrox", label: "Team Nitrox" },
                { href: "/autokriti", label: "Autokriti" },
                { href: "/sponsors", label: "Sponsors" },
                { href: "/teammembers", label: "Team Members" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="h-[1px] w-0 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Social
            </h3>
            <div className="space-y-5 max-[500px]:space-y-1">
              {[
                {
                  name: "Team Accelerons",
                  links: [
                    { icon: "instagram", url: "https://instagram.com/accelerons_nitkkr?utm_medium=copy_link" },
                    { icon: "facebook", url: "https://www.facebook.com/teamaccelerons/" },
                  ],
                },
                {
                  name: "Team Nitrox",
                  links: [
                    { icon: "instagram", url: "https://instagram.com/nitroxteam?utm_medium=copy_link" },
                    { icon: "facebook", url: "https://www.facebook.com/teamnitrox/" },
                  ],
                },
                {
                  name: "Autokriti",
                  links: [
                    { icon: "instagram", url: "https://instagram.com/autokriti?utm_medium=copy_link" },
                    { icon: "facebook", url: "https://www.facebook.com/autokriti/" },
                  ],
                },
              ].map((team, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/40 transition-colors"
                >
                  <span className="text-gray-400">{team.name}</span>
                  <div className="flex gap-3">
                    {team.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="text-gray-400 hover:text-white transition-all hover:scale-110 transform"
                        aria-label={`${team.name} ${link.icon}`}
                      >
                        {link.icon === "instagram" ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:saenitkkr@nitkkr.ac.in"
                  className="group text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-4 h-4 group-hover:text-blue-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span>saenitkkr@nitkkr.ac.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/sae-nit-kkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-4 h-4 group-hover:text-blue-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="group text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-4 h-4 group-hover:text-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span>Contact Page</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Guidelines
            </h3>
            <ul className="space-y-4">
              {[
                {
                  href: "/termsandconditions",
                  label: "Terms & Conditions",
                  target: "_blank",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  ),
                },
                {
                  href: "/privacypolicy",
                  label: "Privacy Policy",
                  target: "_blank",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  ),
                },
                {
                  href: "/refundandcancelpolicy",
                  label: "Refund Policy",
                  target: "_blank",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  ),
                },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-colors flex items-center"
                    target='_blank'
                  >
                    <div className="p-2 mr-3 rounded-full bg-gray-800 group-hover:bg-blue-500/20 transition-colors">
                      <svg
                        className="w-4 h-4 group-hover:text-blue-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {link.icon}
                      </svg>
                    </div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/40 text-center relative">
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill="#1e293b" />
            <circle cx="12" cy="12" r="3" fill="#3b82f6" />
          </svg>

          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SAE NITKKR. All rights reserved.
            </p>

            {/* <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
