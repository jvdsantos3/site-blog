import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Pagína inicial">
      <Image src="/logo.svg" alt="Logo site" width={116} height={32} />
    </Link>
  );
};
