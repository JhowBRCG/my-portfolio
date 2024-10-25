type SubTitleProps = {
  text: string;
  textCenter: boolean;
};

export default function SubTitle({ text, textCenter }: SubTitleProps) {
  const isTextCenter = textCenter && (
    <div className="h-[1px] flex-grow bg-line-light dark:bg-line-dark" />
  );

  return (
    <div className="flex items-center gap-[6px]">
      {isTextCenter}
      <h2 className="text-[24px] xl:text-[40px]">{text}</h2>
      <div className="h-[1px] flex-grow bg-line-light dark:bg-line-dark" />
    </div>
  );
}
