import Link from "next/link"
import Image from "next/image"

const NavBar = () => {
  return (
    <nav className=" flexBetween relative max-container padding-container z-30 py-5">
        <Link href='/'>
        <Image src='/hilink-logo.svg' alt="logo" width={74} height={29}/>
        </Link>
    </nav>
  )
}

export default NavBar
