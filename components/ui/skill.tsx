interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="flex items-center justify-center rounded-full border-1 border-transparent bg-[var(--highlight)]/30 px-3 py-1 transition-all duration-200 select-none hover:border-[var(--highlight)]">
      <span className="text-sm text-[var(--highlight)] transition-colors duration-200 hover:text-[var(--primary)]">
        {name}
      </span>
    </div>
  );
};

export default Skill;
