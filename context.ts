import { z } from "zod";

export const Context = z
  .object({
    type: z.string().toLowerCase(),
  })
  .and(z.record(z.unknown()));
