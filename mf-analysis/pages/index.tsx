import Layout from "../components/Layout";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <Layout>
      <div className=" mt-10">
        <Dashboard />
      </div>
    </Layout>
  );
}
