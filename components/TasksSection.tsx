
import SectionHeading from "@/components/SectionHeading";
import TaskProgress from "@/components/TaskProgress";

type TaskSectionProps = {
  progress: number;
};

export default function TasksSection({
  progress,
}: TaskSectionProps) {
  return (
    <>
      <SectionHeading />
      <TaskProgress progress={progress} />
    </>
  );
}
