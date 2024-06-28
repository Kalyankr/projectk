"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ServiceRequestCardProps {
  title: string;
  status: string;
  date: string;
  description: string;
  comments: string;
  referenceNumber: string;
}

const ServiceRequestCard = ({
  title,
  status,
  date,
  description,
  comments,
  referenceNumber,
}: ServiceRequestCardProps) => {
  return (
    <Card className="relative my-4 w-full space-x-1 rounded-xl shadow-lg hover:cursor-pointer hover:bg-muted">
      <Badge
        variant="secondary"
        className={cn(
          "w-fit-content absolute right-4 top-2 z-40 rounded-md",
          status === "OPEN"
            ? "bg-green-800 text-white hover:bg-green-900"
            : "text-muted-foreground",
        )}
      >
        {status}
      </Badge>
      <CardTitle className="mt-2 pl-6">{title}</CardTitle>
      <CardDescription className="mt-2 pl-6">
        Submitted on : {date}
      </CardDescription>
      <CardContent className="mt-2">
        <span>{description}</span>
        <p className="text-sm">{comments}</p>
        <p>Any comments goes here</p>
      </CardContent>
      <CardFooter>
        Reference Number :
        <span className="text-muted-foreground">{referenceNumber}</span>
      </CardFooter>
    </Card>
  );
};

export default ServiceRequestCard;
