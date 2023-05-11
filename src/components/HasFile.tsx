import { AiOutlineClose, AiOutlineFilePdf } from "react-icons/ai"

interface hasFileProps {
  file?: File 
  removeFile: () => void
}

const HasFile = ({ file, removeFile }: hasFileProps) => {
  return (
    <div className="w-1/2 h-full rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 flex justify-center items-center">
      <div className="bg-white p-4 w-auto rounded-md shadow-md flex gap-3 items-center justify-center">
        <AiOutlineFilePdf size={30} color="#374151" />
        <span className="text-gray-700">{file?.name}</span>
        <button type="button" onClick={removeFile}>
          <AiOutlineClose size={20} color="#374151" />
        </button>
      </div>
    </div>
  )
}

export default HasFile