import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="FlowIQ">
      <Image src={logo} alt="FlowIQ Logo"  height={40} />
    </Link>
  );
}
