import Link from "next/link"
import { useRouter } from "next/router"

const style = {
  color:'#0070f3',
  textDecoration:'underline'
}

export const ActiveLink = ({text, href}:any) => {

  const {asPath} = useRouter();

  return (
    <Link style={asPath=== href?style:undefined} href={href}>{text}</Link>
  )
}
