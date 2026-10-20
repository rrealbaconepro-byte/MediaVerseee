
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage, ServerResponse } from "http";
import { GetServerSidePropsContext } from "next";

// Create a type that encompasses both API routes and getServerSideProps
type LoggableRequest = NextApiRequest | GetServerSidePropsContext["req"];
type LoggableResponse = NextApiResponse | ServerResponse;

export async function logServerStats(
  req: LoggableRequest,
  res: LoggableResponse
) {
  // Logging disabled
  return;
}
