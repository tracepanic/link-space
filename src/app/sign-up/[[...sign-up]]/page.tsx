import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto px-4 mt-10 flex justify-center">
      <SignUp />
    </div>
  );
}
