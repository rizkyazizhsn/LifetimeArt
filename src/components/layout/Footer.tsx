import Logo from "./Logo"
import { FOOTER_MENU_LIST } from "@/constants/footer-constant"

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container rounded-t-xl bg-[#101014] p-20">
        <div className="flex items-start justify-between">
          <Logo />
          <div>
            <p className="font-medium text-2xl text-white">Quick links</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3 mt-4 py-1">
              {FOOTER_MENU_LIST.map(({ title, href }) => (
                <li key={title}>
                  <a href={href} className="nav-link !ml-0 !font-normal" role="menuItem" aria-label={`Navigate to ${title} section`}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-5 w-full inline-block border border-[#D0D1DB1A]" />
        <p className="font-semibold text-lg">&copy; {new Date().getFullYear()} LifetimeArt. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer