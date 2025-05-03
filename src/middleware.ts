import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookies = request.cookies;
  const res = NextResponse.next();

  // RESTITUISCE TOKEN PRESENTE
  if (cookies.get("refreshToken")) {
    return res;
  }

  // Altrimenti crea un Wix client “anonimo”
  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });

  // Genera token visitatore “ospite” (non loggato)
  const tokens = await wixClient.auth.generateVisitorTokens();
  // Salva il refreshToken nei cookie
  res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
};
