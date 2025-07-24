import { SignIn } from "@clerk/nextjs";
//sign in
export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}
