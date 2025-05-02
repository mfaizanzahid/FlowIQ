import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";
import FooterIllustration from "@/public/images/footer-illustration.svg";


export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(3,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#how-we-can-help"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#process"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#integrations"
                >
                  Integrations
                </Link>
              </li>
              
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#testimonials"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#contact"
                >
                  Contact us
                </Link>
              </li>
             
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Content Library
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Knowledge base
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Cookie manager
                </Link>
              </li>
            </ul>
          </div> */}
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">

                &copy; {new Date().getFullYear()} FlowIQ. All rights reserved.
            
                {/* <span className="text-gray-700"> · </span> */}
                {/* <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#0"
                >
                  Terms
                </Link> */}
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <Link
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="/#0"
                    aria-label="Twitter"
                  >
                    {/* <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg> */}
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="/#0"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="/#0"
                    aria-label="Instagram"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 32 32" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                   className="h-6 w-6 lucide lucide-instagram-icon lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="/#0"
                    aria-label="Youtube"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 28 40" fill="none" stroke="currentColor" 
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                   className="h-8 w-6 lucide lucide-youtube-icon lucide-youtube">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                   <path d="m10 15 5-3-5-3z"/></svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="/#0"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-6 w-6 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      


    </footer>
    
  );
}
