import { Navbar } from "../common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
