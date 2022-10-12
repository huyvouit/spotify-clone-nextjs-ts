import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import IconButton from "./IconButton";
import { signOut, useSession } from "next-auth/react";
const Divider = () => {
  return <div className="border-t-[0.1px] border-gray-900"></div>;
};
const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] overflow-hidden md:block ">
      {session?.user && (
        <>
          Signed in as {session?.user?.name} <br />{" "}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}

      <div className="space-y-4">
        <IconButton icon={HomeIcon} label={"Home"} />
        <IconButton icon={MagnifyingGlassIcon} label={"Search"} />
        <IconButton icon={BuildingLibraryIcon} label={"Library"} />
        <Divider />
        <IconButton icon={PlusCircleIcon} label={"Create Playlist"} />
        <IconButton icon={HeartIcon} label={"Liked songs"} />

        <p className="cursor-pointer hover:text-white">Testing</p>
      </div>
    </div>
  );
};

export default Sidebar;
