import Link from "next/link";
import ChannelList from "./ChannelList";
import UserData from "./UserData";
import Notification from "./Notification";

const Header = () => {
  return (
    <header className="wrapper">
      <div
        key="header-content"
        className="m-auto flex w-full max-w-[1200px] justify-between p-5"
      >
        <div key="header-channel-section" className="flex gap-2">
          <Link href="/">시작 페이지로</Link>
          <ChannelList dropdownChannelList={[]} listType="구독 채널">
            구독 채널
          </ChannelList>
          <ChannelList dropdownChannelList={[]} listType="주요 채널">
            주요 채널
          </ChannelList>
        </div>
        <div key="header-user-section" className="flex gap-2">
          <div>
            <Link href="/">뉴스</Link>
          </div>
          <div>
            <Link href="/">위키</Link>
          </div>
          <Notification />
          <UserData />
        </div>
      </div>
    </header>
  );
};

export default Header;
