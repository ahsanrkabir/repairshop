import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-6 p-4 text-4xl">
      <h1>Dan&apos;s Computer Repair Shop</h1>
      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
};

export default LoginPage;
