import Image from "next/image";
import DropDown from "@/app/_components/DropDown/DropDown";
import { Job } from "@/app/_components/JobBadge/JobBadge";
import openDropDownIcon from "@/public/icons/bottomArrow.svg";
import closeDropDownIcon from "@/public/icons/topArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";

function EditJobDropDown({ currentJob }: { currentJob: Job }) {
  const { isOpen, toggleState } = useToggleHook();
  return (
    <div className="relative">
      <div
        onClick={toggleState}
        className="flex justify-between rounded-lg border border-solid border-gray-200 p-3 text-sm text-gray-900">
        {currentJob}
        <Image width={20} src={isOpen ? closeDropDownIcon : openDropDownIcon} alt="직무 선택하기" />
      </div>
      {isOpen && (
        <DropDown className="absolute w-full">
          <DropDown.TextItem>프론트엔드</DropDown.TextItem>
          <DropDown.TextItem>백엔드</DropDown.TextItem>
          <DropDown.TextItem>디자이너</DropDown.TextItem>
          <DropDown.TextItem>IOS</DropDown.TextItem>
          <DropDown.TextItem>안드로이드</DropDown.TextItem>
          <DropDown.TextItem>데브옵스</DropDown.TextItem>
          <DropDown.TextItem>기획자</DropDown.TextItem>
          <DropDown.TextItem>풀스택</DropDown.TextItem>
          <DropDown.TextItem>기타</DropDown.TextItem>
        </DropDown>
      )}
    </div>
  );
}

export default EditJobDropDown;
