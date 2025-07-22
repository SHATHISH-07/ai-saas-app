"use client";

const Footer = () => {
  const handleNavigateHome = () => {
    scrollTo(0, 0);
  };

  return (
    <footer className=" border-t-1 border-black mt-10  pt-12">
      <div className=" px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding */}
        <div className="text-center md:text-left mb-5 md:mb-0">
          <h1 className="text-lg font-semibold">AI Saas APP (ReactIQ)</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Powered by <span className="font-medium text-gray-700 ">Vapi</span>,{" "}
            <span className="font-medium text-gray-700 ">Supabase</span>,{" "}
            <span className="font-medium text-gray-700 ">Clerk</span>, and{" "}
            <span className="font-medium text-gray-700 ">Sentry</span>
          </p>

          <a
            href="https://shathish2004.github.io/Shathish-Portfolio/#/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-5 text-lg font-semibold  text-gray-500 hover:text-gray-700"
          >
            😊 Give FeedBack
          </a>
        </div>

        <div className="flex flex-col space-y-5 items-center">
          {/* Navigation */}
          <div className="flex  space-y-2 md:space-y-0 space-x-3 md:space-x-4">
            <p
              onClick={handleNavigateHome}
              className="cursor-pointer hover:text-gray-400 "
            >
              Home
            </p>
            <a
              href="https://shathish2004.github.io/Shathish-Portfolio/#/about"
              target="_blank"
              className="hover:text-gray-400 "
            >
              About
            </a>
            <a
              href="https://shathish2004.github.io/Shathish-Portfolio/#/contact"
              target="_blank"
              className="hover:text-gray-400 "
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/SHATHISH-07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 "
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shathish-kumaran-05a298325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 "
              aria-label="LinkedIn"
            >
              Linkedin
            </a>
            <a
              href="https://shathish2004.github.io/Shathish-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 "
              aria-label="Portfolio"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right ">
          © 2025{" "}
          <a
            href="https://www.linkedin.com/in/shathish-kumaran-05a298325"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shathish Kumaran
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
