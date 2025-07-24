import { SignIn } from "@clerk/nextjs";
//sign
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}
