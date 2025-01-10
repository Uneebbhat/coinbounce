"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLinks from "@/components/NavLinks";
import Container from "@/components/Cointainer";
import { Button } from "./ui/button";
import MobNav from "./MobNav";
import { useRouter, usePathname } from "next/navigation";
import useUserStore from "@/store/user/useUserStore";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { user } = useUserStore();
  // console.log(user.image);

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <header className="border-b-2 px-4">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/">
              <Image src={logo} width={100} alt="Coinbounce" />
            </Link>
          </div>
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/create-post">
              <Button
                variant={pathName == "/create-post" ? "default" : "outline"}
                className="hidden md:block"
              >
                Create Post
              </Button>
            </Link>
            <div className="block md:hidden">
              <MobNav />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={user.image?.toString() ?? ""}
                    alt={user.name}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] cursor-pointer mr-6">
                <Link href={`/profile/${user.id}`}>
                  <DropdownMenuLabel className="text-[16px]">
                    {user.name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel className="text-[14px] font-light">
                    {user.email}
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:underline">
                  Dashboard
                </DropdownMenuItem>
                <Link href="/create-post">
                  <DropdownMenuItem className="cursor-pointer hover:underline">
                    Create Post
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer hover:underline">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer hover:underline"
                  onClick={handleLogout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
