import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function UserHeroCard() {
  return (
    <Card className="w-full rounded-xl shadow-md my-8 ">
      <CardHeader>
        <CardDescription className="">
          WELCOME HOME, KALYAN REDDY
        </CardDescription>
        <CardTitle>Apartment Name, Unit 1234</CardTitle>
        <CardDescription>You have no balance due</CardDescription>
        <CardDescription>You have a balance of 1234</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full h-14 bg-primary font-bold text-xl">
          Pay now
        </Button>
      </CardContent>
    </Card>
  );
}
