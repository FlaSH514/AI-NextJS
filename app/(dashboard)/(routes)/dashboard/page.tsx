import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashBoardPage() {
  return (
    <div>
      <Button>Dashbaord</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
