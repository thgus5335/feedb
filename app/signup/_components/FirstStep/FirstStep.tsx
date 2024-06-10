import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import firstStepBar from "@/public/icons/firstStepBar.svg";
import Input from "@/app/_components/Input/Input";
// import ExampleButton from "../ExampleButton/ExampleButton";
import Button from "../../../_components/Button/Button";

interface FirstStepFormData {
  nickName: string;
}

interface FirstStepProps {
  nextStep: () => void;
}

const CONSTANTS = {
  NICKNAME_MAX_LENGTH: 8,
  INTRODUCTION_MAX_LENGTH: 150,
};

function FirstStep({ nextStep }: FirstStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStepFormData>({ mode: "onBlur", reValidateMode: "onBlur" });

  const onSubmit: SubmitHandler<FirstStepFormData> = data => {
    console.log(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
        <Image src={firstStepBar} alt="첫번째회원가입스텝바" />

        <div className="mb-[90px] mt-12 text-[#3A3A3A]">닉네임과 소개를 작성해 주세요</div>

        <Input
          title="닉네임*"
          type="text"
          name="nickName"
          placeholder="사용하실 닉네임을 작성해주세요"
          inputSize="normal"
          register={register("nickName", {
            required: {
              value: true,
              message: "닉네임을 입력해주세요",
            },
            maxLength: {
              value: CONSTANTS.NICKNAME_MAX_LENGTH,
              message: "닉네임은 8자를 초과할 수 없습니다",
            },
          })}
          error={errors.nickName}
        />

        <div className="flex flex-col">
          <label htmlFor="introduction" className="text-base font-bold text-gray-900">
            소개
          </label>
          <textarea
            placeholder={`자기를 어필할 수 있는 소개글을 작성해주세요 (${CONSTANTS.INTRODUCTION_MAX_LENGTH}자)`}
            id="introduction"
            className="mb-[200px] h-40 w-[379px] rounded border border-[#EBEBEB] px-4 py-2 "
          />
        </div>

        {/* <ExampleButton /> */}

        <Button buttonSize="small" bgColor="mainBlue" onClick={nextStep}>
          다음으로
        </Button>
      </div>
    </form>
  );
}

export default FirstStep;
