import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HoverCardData {
  avatarImg: string;
  name: string;
  joined?: string;
}

const BlogsCardAvatar = ({ avatarImg, name, joined }: HoverCardData) => {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">
            <Avatar>
              <AvatarImage src={avatarImg} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <h2 className="font-bold text-[18px]">{name}</h2>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-full mx-2">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-sm font-semibold">@{name}</h4>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined {joined}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default BlogsCardAvatar;
