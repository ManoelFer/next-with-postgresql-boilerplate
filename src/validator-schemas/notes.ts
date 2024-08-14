import { z } from 'zod';

export const noteSchema = z.object({
  id: z.string().optional(),
  note: z.string().trim().min(3, 'Note must be 3 chars long!'),
  date: z.string().optional(),
});
