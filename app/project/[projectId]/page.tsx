import React from "react";
import ProjectHeader from "./_components/Project/ProjectHeader";
import ProjectArticle from "./_components/Project/ProjectArticle";
import TeamMemberSection from "./_components/ProjectSection/TeamMemberSection";
import StackSection from "./_components/ProjectSection/StackSection";
import RatingSection from "./_components/ProjectSection/RatingSection";
import WriteCommentSection from "./_components/CommentSection/WriteCommentSection";
import CommentListSection from "./_components/CommentSection/CommentListSection";

const stackList = ["Javascript", "Typescript", "Java"];
const linkList = [
  { id: 1, tool: "github", url: "https://www.naver.com/" },
  { id: 2, tool: "figma", url: "https://comic.naver.com/index" },
  { id: 3, tool: "notion", url: "https://www.youtube.com/" },
  { id: 4, tool: "etc", url: "https://www.youtube.com/" },
];

function Project() {
  return (
    <main className="mx-auto my-8 flex w-[1200px] flex-col gap-12">
      <div className="flex flex-col gap-10">
        <ProjectHeader />
        <ProjectArticle linkList={linkList} />
        <TeamMemberSection />
        <StackSection stackList={stackList} />
        <RatingSection />
      </div>
      <div>
        <WriteCommentSection />
        <CommentListSection />
      </div>
    </main>
  );
}

export default Project;
