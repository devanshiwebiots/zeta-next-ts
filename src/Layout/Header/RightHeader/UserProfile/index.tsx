import { Href, ImagePath } from "@/Constant";
import { UserProfileData } from "@/Data/Header";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut } from "react-feather";
import { Media } from "reactstrap";

const UserProfile = () => {
  const { data: session } = useSession();
  const LogOutUser = () => {
     signOut();
  };

  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0 me-0">
      <Media className="profile-media">
        <Image src={session?.user?.image || `${ImagePath}/avtar/man.png`} alt="" height={30} width={30}/>
        <Media body>
        <span>{session?.user?.email}</span>
        <p className='mb-0'>{session?.user?.name || 'WebDesigner'}</p>

        </Media>
      </Media>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item, i) => (
          <li key={i}>
            <Link href={`${item.link}`}>
              {item.logo}
              <span>{item.name} </span>
            </Link>
          </li>
        ))}
        <li>
          <a onClick={LogOutUser} href={Href}>
            <LogOut />
            <span>Log Out </span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
