import Link from "next/link"
import Image from "next/image"
import {NAV_LINKS} from '../constants/index'
import Button from "./Button"

const NavBar = () => {
  return (
    <nav className=" flexBetween relative max-container padding-container z-30 py-5 ">
        <Link href='/'>
        <Image src='/hilink-logo.svg' alt="logo" width={74} height={29}/>
        </Link>
        <ul className="lg:flex hidden">
          {
            NAV_LINKS.map((ele)=><Link href={ele.href} key={ele.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{ele.label} </Link>)
          }
        </ul>
        <div className="lg:flexCenter hidden">
          <Button 
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>
        <Image src='/menu.svg' alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  ) 
}

export default NavBar
