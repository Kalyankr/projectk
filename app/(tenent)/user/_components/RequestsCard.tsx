"use client";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { GiAutoRepair } from "react-icons/gi";
import { FaPlusCircle } from "react-icons/fa";
import { useServiceRequest } from "@/hooks/useServiceRequest";

const RequestsCard = () => {
  const { onOpen } = useServiceRequest();
  return (
    <Card className="w-full rounded-xl shadow-md my-8">
      <CardTitle className="flex items-center justify-center mt-8">
        <GiAutoRepair className="h-12 w-12 text-3xl text-primary" />
      </CardTitle>
      <CardContent className="flex items-center justify-center mt-4">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium leading-none">
            You dont have any open request currently
          </p>
          <Button
            variant="ghost"
            onClick={onOpen}
            className="w-full text-md text-primary hover:text-primary/75 font-semibold"
          >
            <FaPlusCircle className="h-6 w-6 mr-2" />
            Create a new request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestsCard;
