import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function UnitHero() {
  return (
    <Card className="w-full rounded-xl shadow-lg my-8">
      <CardHeader className="flex items-center justify-center space-y-4">
        <CardTitle>Apartment Name, Unit 1234</CardTitle>
        <CardDescription className="flex items-center justify-center">
          Status:<span className="pl-1 font-bold">Resident</span>
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Link href="/user/unit/lease-details">Lease Details</Link>
      </CardContent>
    </Card>
  );
}
