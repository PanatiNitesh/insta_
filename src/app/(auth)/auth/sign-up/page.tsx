import { SignUp } from "@clerk/nextjs";
//sign up
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp />
    </div>
  );
}
