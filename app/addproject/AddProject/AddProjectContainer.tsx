import React from "react";
import Button from "@/app/_components/Button/Button";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";
import ThumbnailBox from "../_components/ImageBox/ThumbnailBox";
import ProjectImageBox from "../_components/ImageBox/ProjectImageBox";
import Title from "../_components/Title";
import TextArea from "../_components/TextArea";
import Input from "../_components/Input";

function AddProjectContainer() {
  return (
    <>
      <div className="mt-8 flex w-[690px] flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" additionalSize="(232 x 232px)" />
          <ThumbnailBox />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="프로젝트 이름" name="projectTitle" additionalSize="(최대 50자)" label />
          <Input type="text" placeholder="제목을 입력해주세요" inputWidth="w-full" name="projectTitle" />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="소개" name="projectIntroduction" additionalSize="(최대 50자)" label />
          <Input type="text" placeholder="소개를 입력해주세요" inputWidth="w-full" name="projectIntroduction" />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="본문" name="projectDescription" additionalSize="(최대 150자)" label />
          <TextArea placeholder="텍스트를 입력해주세요" name="projectDescription" />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="프로젝트 링크" name="projectLink" label />
          <Input type="text" placeholder="http://" inputWidth="w-full" name="projectLink" />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="이미지" />
          <ProjectImageBox />
        </section>
        <SkillStackSection />
        <AddSection title="팀원" placeholder="이름" name="member" inputWidth="w-[114px]" dropDownType="job" />
        <AddSection title="추가 링크" placeholder="http://" name="addLink" inputWidth="w-[520px]" dropDownType="tool" />
      </div>
      <div className="mt-56 flex w-full justify-end">
        <Button buttonSize="normal" bgColor="mainBlue">
          등록
        </Button>
      </div>
    </>
  );
}

export default AddProjectContainer;