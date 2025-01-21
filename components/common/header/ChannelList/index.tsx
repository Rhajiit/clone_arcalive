"use client";

import ChannelListType from "@/types/channel-list";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface ChannelIndexComponentType {
  dropdownChannelList: ChannelListType;
  children: ReactNode;
  listType: string;
}

const ChannelList = ({
  dropdownChannelList,
  children,
  listType,
}: ChannelIndexComponentType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickChannelButton = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const isChannelListEmpty = dropdownChannelList.length === 0;

  return (
    <div className="relative">
      <button type="button" onClick={clickChannelButton}>
        {children}
      </button>
      {isDropdownOpen && (
        <ul className="wrapper absolute w-max p-2">
          {isChannelListEmpty
            ? "채널이 없습니다."
            : dropdownChannelList.map((item) => (
                <li key={listType + "-" + item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default ChannelList;
