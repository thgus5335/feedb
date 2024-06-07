import Image from "next/image";
import eyeIcon from "@/public/icons/eye.svg";

interface ProjectCardInfoProps {
  projectTitle: string;
  projectSubDescription: string;
  viewCount: number | string;
}

function ProjectCardInfo({ projectTitle, projectSubDescription, viewCount }: ProjectCardInfoProps) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h6 className="max-w-[192px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold">
            {projectTitle}
          </h6>
          <div className="flex gap-1.5">
            <Image width={16} src={eyeIcon} alt="조회수" />
            <p className="text-xs font-semibold text-gray-500">{viewCount}</p>
          </div>
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600">{projectSubDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCardInfo;
