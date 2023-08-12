import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
    <div className="w-full overflow-x-hidden items-center h-screen flex flex-col background ">
      <h1 className="bg-white w-11/12 text-center mt-[40px] px-10 py-2  text-4xl font-bold rounded-lg">
        GIF Generator
      </h1>
      <div className="flex items-center mt-[30px] gap-y-10 flex-col w-full">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
