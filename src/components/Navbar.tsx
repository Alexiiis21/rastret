import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Wrapper from "./Wrapper";
import { NavMenu } from "./NavMenu";
import { User } from "lucide-react";

const user = false;

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Wrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <div className="flex items-center space-x-10">
            <Link href="/" className="flex z-40 font-semibold text-lg">
              Ras<span className="text-primary">tret</span>
            </Link>
            <NavMenu />
          </div>
          <div className="h-full flex items-center space-x-4">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {user ? null : (
                <Link
                  href="/sesion-sesion"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Iniciar Sesión
                </Link>
              )}
              {user ? null : (
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              )}
              {user ? (
                <User />
              ) : (
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Crear cuenta
                </Link>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
