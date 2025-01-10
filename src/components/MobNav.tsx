import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const MobNav = () => {
  const pathName = usePathname();
  const routes = [
    {
      label: "News",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Coins Rates",
      href: "/coins-rates",
    },
    {
      label: "Create Post",
      href: "/create-post",
    },
  ];
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <nav className="mt-4">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.label}
                  className="mx-2 flex flex-col"
                >
                  <Button
                    variant={pathName === route.href ? "default" : "ghost"}
                  >
                    {route.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobNav;
