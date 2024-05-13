type BenefitProps = {
  text: string;
};

export function Benefit({ text }: BenefitProps) {
  return (
    <div className="flex gap-4 mt-4 md:mt-2">
      <img className="md:w-4" src="/icon-list.svg" alt="icon list"  />
      <span className="md:text-[0.7rem] font-roboto  text-zinc-800 opacity-90">{text}</span>
    </div>
  );
}
