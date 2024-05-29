import React from "react";
import Image from "next/image";
import favoriteIcon from "@/public/icons/favorite.svg";
import shareIcon from "@/public/icons/share.svg";
import kebabIcon from "@/public/icons/kebab.svg";

function ProjectHeader() {
  return (
    <header className="px-4 py-3">
      <div className="flex justify-between gap-2">
        <h1 className="text-2xl font-bold text-[#454545]">프로젝트_제목</h1>
        <div className="flex gap-2">
          <Image src={favoriteIcon} alt="프로젝트 찜하기." />
          <Image src={shareIcon} alt="프로젝트 공유하기." />
          <Image src={kebabIcon} alt="프로젝트 메뉴." />
        </div>
      </div>
      <div className="flex w-full items-center gap-5">
        <p className="text-base font-bold text-[#454545]">작성자</p>
        <p className="text-sm text-[#6f6f6f]">20XX.XX.XX</p>
      </div>
    </header>
  );
}

export default ProjectHeader;