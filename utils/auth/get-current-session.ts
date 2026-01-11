import { cookies } from "next/headers";

export async function getCurrentSession({
  authToken,
}: {
  authToken: string;
}): Promise<string | null> {
  const token = (await cookies()).get(authToken)?.value;
  if (!token) return null;

  return token ?? null;
}
