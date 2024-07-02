import { TriangleAlertIcon } from "lucide-react";
import CardWrapper from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div>
        <TriangleAlertIcon className="flex h-12 w-full items-center justify-center text-red-500" />
      </div>
      <div className="mt-4 text-center text-muted-foreground">
        <p className="text-sm">
          Email is already in use with different provider.
        </p>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
