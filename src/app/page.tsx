import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <UserButton />
    </div>
  );
};

export default Home;
