import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        width={54} height={54}
        src="./assets/logo.svg"
        alt="logo"
        priority
      />
    </Link>
  )
}

export default Logo