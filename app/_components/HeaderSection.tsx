import SortSelect from './SortSelect';

interface HeaderSectionProps {
  selectedTag: string;
}

export default function HeaderSection({ selectedTag }: HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        {selectedTag === 'all' ? 'Blog List' : `${selectedTag} related blogs`}
      </h2>
      <SortSelect />
    </div>
  );
}
