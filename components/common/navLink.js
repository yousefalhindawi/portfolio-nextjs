
import { RouterContext } from "@/RouterContext/RouterProvider";
import Link from "next/link";
import { useContext } from "react";

function NavLink({ href, exact, children , ...props}) {
    const router = useContext(RouterContext);
  const isActive = exact ? router?.pathname === href : router?.pathname.includes(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <div {...props}>{children}</div>
    </Link>
  );
}
export default NavLink;
