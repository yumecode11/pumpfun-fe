import { FC } from "react";

import UserProfile from "./components/UserProfile";
import ActivityTabs from "./components/ActivityTabs";

type ProfileProps = {
  params: {
    id: string
  }
}
const Profile: FC<ProfileProps> = (props) => {
  const { params } = props;
  const { id } = params;

  return (
    <main className="container mx-auto px-4 py-4 sm:py-12 lg:min-h-[calc(100vh-220px)]">
      <UserProfile />

      <ActivityTabs />
    </main>
  )
}

export default Profile;
