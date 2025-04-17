import { Logo } from "@/components/Logo";

export default function layoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Logo />
      <h1 className="text-3xl my-2">Bienvenido a mi Dashboard</h1>
      <h2 className="text-2xl mb-3">Dashboard</h2>
      {children}
    </div>
  );
}
