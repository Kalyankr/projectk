import React from "react";
import UserTabNav from "../../_components/UserTabNav";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceRequestCard from "../_components/ServiceRequestCard";

interface ServiceRequestProps {
  title: string;
  date: string;
  comments: string;
  description: string;
  status: string;
  referenceNumber: string;
}

const serviceRequests: ServiceRequestProps[] = [
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "OPEN",
    referenceNumber: "SR-00001",
  },
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "CLOSED",
    referenceNumber: "SR-00002",
  },
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "OPEN",
    referenceNumber: "SR-00003",
  },
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "CLOSED",
    referenceNumber: "SR-00004",
  },
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "OPEN",
    referenceNumber: "SR-00005",
  },
  {
    title: "General Maintenance",
    date: new Date().toDateString(),
    comments: "Hot water never cools down",
    description: "Plumbing - hot water",
    status: "CLOSED",
    referenceNumber: "SR-00006",
  },
];

const ServiceRequests = () => {
  return (
    <div>
      <UserTabNav pageName="Service Requests" />
      <Tabs defaultValue="open" className="container mt-4 max-w-screen-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="open">Open Requests</TabsTrigger>
          <TabsTrigger value="closed">Closed Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="open">
          {serviceRequests
            .filter((serviceRequest) => serviceRequest.status === "OPEN")
            .map((serviceRequest, index) => (
              <ServiceRequestCard
                key={index}
                title={serviceRequest.title}
                date={serviceRequest.date}
                comments={serviceRequest.comments}
                description={serviceRequest.description}
                status={serviceRequest.status}
                referenceNumber={serviceRequest.referenceNumber}
              />
            ))}
        </TabsContent>
        <TabsContent value="closed">
          {serviceRequests
            .filter((serviceRequest) => serviceRequest.status === "CLOSED")
            .map((serviceRequest, index) => (
              <ServiceRequestCard
                key={index}
                title={serviceRequest.title}
                date={serviceRequest.date}
                comments={serviceRequest.comments}
                description={serviceRequest.description}
                status={serviceRequest.status}
                referenceNumber={serviceRequest.referenceNumber}
              />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceRequests;
