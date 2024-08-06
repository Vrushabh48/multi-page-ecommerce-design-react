import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import Content from "../Components/Content"
import Featured from "../Components/Featured";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Content />
    </div>
  );
}
