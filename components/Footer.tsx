import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer.link">
              <h3 className="font-bold">{link.title}</h3>
              <p>
                <br />
              </p>
              <div className="flex flex-col gap-5">
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <p>@2023 CarHub. All Rights Reserved</p>

        <div className="footer__copyrigths-link">
          <Link href="/" className="mr-10 text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
