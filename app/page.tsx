import TaskForm from "@/components/TaskForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Создать новый заказ</h1>
      <TaskForm />
    </main>
  );
}
