// import { AuthPage } from "@/src/components/auth-page";
import { authProviderServer } from "@/src/providers/auth-provider";
// import { redirect } from "next/navigation";

export default async function ForgotPassword() {
  const data = await getData();

  // if (data.authenticated) {
  //   redirect(data?.redirectTo || "/");
  // }

  // <AuthPage type="forgotPassword" />
  return <></>;
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
