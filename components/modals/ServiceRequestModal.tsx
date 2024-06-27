import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useServiceRequest } from "@/hooks/useServiceRequest";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

export function ServiceRequestModal() {
  const { isOpen, onClose } = useServiceRequest();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-11/12 sm:max-w-screen-sm item-center rounded-lg border-slate-700">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center">
            Service Request
          </DialogTitle>
          <DialogDescription className="flex items-center justify-center">
            Please select the type of service request you would like to make.
          </DialogDescription>
        </DialogHeader>
        <ServiceRequestForm />
      </DialogContent>
    </Dialog>
  );
}
