import { z } from 'zod';

const schema = z.object({
  CWA_TOKEN: z.string().min(1),
  DISCORD_TOKEN: z.string().min(1),
  DISCORD_CLIENT_ID: z.string().min(1),
});

export const env = schema.parse(process.env);
