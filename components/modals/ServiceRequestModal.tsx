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
      <DialogContent className="item-center w-11/12 rounded-lg border-slate-700 sm:max-w-screen-sm">
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
