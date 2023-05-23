import { z } from "zod";

export const Channel = z
  .object({
    id: z.string(),
    type: z.enum(["user", "private"]),
  })
  .strict();
