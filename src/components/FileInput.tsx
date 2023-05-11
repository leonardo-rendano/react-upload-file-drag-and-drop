import { useContext } from "react"
import Input from "./Input";
import HasFile from "./HasFile";
import { InputFileContext } from "@/context/FileInputContext";


export const FileInput = () => {
  const { file, removeFile, dropZone } = useContext(InputFileContext)


  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return (
   <Input dropzone={dropZone} />
  )
}