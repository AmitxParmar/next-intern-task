import { type User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import About from "~/components/profile/About";
import Activities from "~/components/profile/Activities";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: sessionData } = useSession();
  const [profile, setProfile] = useState<User>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const userId = router.query.id;

  return (
    /* Style wrapper: TODO: remove mt later */
    <div className="md:flex-start flex h-full w-full flex-col justify-center lg:flex-row lg:items-center lg:px-6">
      {/* Style Divider */}
      <About />
      {/* Style Column */}
      <Activities />
    </div>
  );
};

export default Profile;
