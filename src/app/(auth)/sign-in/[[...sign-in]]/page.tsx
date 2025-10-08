import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
          footerActionLink: "text-blue-500 hover:text-blue-600",
          footer: "hidden",
          footerAction: "hidden",
          card: "shadow-none",
        },
        layout: {},
      }}
    />
  );
}
