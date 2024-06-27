import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
interface UnitCardProps {
  title: string;
  icon: React.ReactNode;
}

const UnitCard = ({ title, icon }: UnitCardProps) => {
  return (
    <Card className="rounded-xl shadow-lg flex flex-col items-center justify-center">
      <CardContent className="mt-8 text-primary">{icon}</CardContent>
      <CardFooter className="mt-1">
        <Link href="/user/unit/service-requests">{title}</Link>
      </CardFooter>
    </Card>
  );
};

export default UnitCard;
