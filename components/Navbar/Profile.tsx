import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ProfileProps {
  signOutHandle: (e: any) => void;
  [key: string]: any;
}

function Profile({ signOutHandle, session }: ProfileProps) {
  const [profileClicked, setProfileClicked] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState(false);

  useEffect(() => {
    const spli = session?.user?.name.split(" ");
    setName(spli[0]);
  }, [session]);

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      if (address) {
        setProfileClicked(false);
        setAddress(false);
      } else if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileClicked(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);
    return () => document.body.removeEventListener("click", closeDropDown);
  }, [address]);

  return (
    <div className="" ref={profileRef} onClick={() => setProfileClicked(true)}>
      <div className=" text-[13px] cursor-pointer group flex relative">
        <h1 className="group-hover:underline">Hi,</h1>
        <span className="capitalize group-hover:underline ">{name}</span>
      </div>

      {profileClicked && (
        <div className="absolute flex flex-col top-full shadow-lg overflow-hidden w-[130px]  h-[130px] bg-white z-[100] border-2">
          <div className="flex flex-wrap items-center justify-start gap-1 py-1 px-1 my-2 border-b-2 w-full">
            <div className="">
              <Image
                alt="logo"
                width={28}
                height={28}
                className="object-cover rounded-full"
                src={session.user?.image || "/user.png"}
              />
            </div>
            <h1 className="capitalize text-[13px] font-mono">{name}</h1>
          </div>
          <div className="flex flex-col gap-1 text-blue-600 font-semibold text-[13px] px-3">
            <Link
              href={"/orders"}
              className="w-fit cursor-pointer hover:underline"
              onClick={() => setAddress(true)}
            >
              My Orders
            </Link>
            <Link
              href={"/address"}
              className="w-fit cursor-pointer hover:underline"
              onClick={() => setAddress(true)}
            >
              My Address
            </Link>
            <h1
              className="cursor-pointer w-fit hover:underline"
              onClick={signOutHandle}
            >
              Sign Out
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
