import Image from 'next/image';
import React from 'react';
import EditIcon from '../../../../../../public/icons/editIcon.svg';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import { useFormContext } from '@/app/hooks/useFormContext';
import { EDIT_STEP, IS_EDITING } from '@/app/context/actions';
type EditBlockProps = {
  question?: string;
  answer: string | string[];
  step: number;
};
const EditBlock: React.FC<EditBlockProps> = ({ question, answer, step }) => {
  const { dispatch } = useFormContext();

  const handleEdit = (step: number) => {
    dispatch({ type: IS_EDITING });
    dispatch({ type: EDIT_STEP, payload: step });
  };

  return (
    <div className="my-8 flex flex-col items-start">
      <div className="flex  mb-2 items-center justify-between w-full">
        {question && answer !== null && (
          <h1 className="font-bold text-md">{question}</h1>
        )}
        {answer !== null && (
          <span
            onClick={() => handleEdit(step)}
            className="ml-4 cursor-pointer"
          >
            <AnimateClick>
              <div className="w-6">
                <Image src={EditIcon} alt="Edit icon" className="w-full" />
              </div>
            </AnimateClick>
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center">
        {typeof answer !== 'string'
          ? answer?.length !== 0 &&
            answer?.map(
              (element: string) =>
                element && (
                  <div className="p-2 mx-1 my-1" key="key">
                    {element && element}
                  </div>
                )
            )
          : answer && (
              <div
                className="p-2 max-w-screen-md w-full overflow-x-auto"
                key="key"
              >
                {answer}
              </div>
            )}
      </div>
    </div>
  );
};

export default EditBlock;
