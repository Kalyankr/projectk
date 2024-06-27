import { z } from "zod";

const serviceRequestSchema = z.object({
  serviceCategory: z.string(),
  serviceType: z.string(),
  comments: z.string().optional(),
});
