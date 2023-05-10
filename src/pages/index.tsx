import { FileInput } from "@/components/FileInput";

export default function Home() {

  const onSubmit = () => {}

  return (
    <div>
      <h1 className="font-bold text-center text-white my-10 text-4xl">
        Drag and drop
      </h1>
      <form onSubmit={onSubmit} className="flex w-full h-72 justify-center items-center">
        <FileInput />
      </form> 
    </div>
  );
}
