import { useCallback, useState } from "react"
import { DropzoneState, useDropzone } from "react-dropzone";
import { BsCloudUpload } from 'react-icons/bs'
import { AiOutlineFilePdf, AiOutlineClose } from 'react-icons/ai'

interface InputProps {
  dropzone: DropzoneState
}

interface hasFileProps {
  file?: File 
  removeFile: () => void
}

export const FileInput = () => {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0])
  }, [])

  const removeFile = useCallback(() => {
    setFile(null)
  }, [file])
  
  const dropzone = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  })
  
  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return (
   <Input dropzone={dropzone} />
  )
}

const Input = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone

  return (
    <div
      {...getRootProps()}
      className={`w-1/2 h-full rounded-lg border-dashed border-4 border-gray-600 hover:border-gray-800 bg-gray-900 hover:bg-gray-800 transition-all ${
        isDragActive ? "border-blue-500" : "border-gray-900"
      }`}
    >
      <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
          <BsCloudUpload
            size={30}
            className={`mb-3 ${
              isDragActive ? "text-blue-500" : "text-rgay-400"
            }`}
          />
          <>
            {isDragActive ? (
              <p className="font-bold text-lg text-blue-400">
                Solte para adicionar
              </p>
            ) : (
              <>
                <p className="mb-2 text-lg text-gray-400">
                  <span className="font-bold">Clique para enviar</span> ou
                  arraste até aqui.
                </p>
                <p className="text-gray-400 text-sm">PDF</p>
              </>
            )}
          </>
        </div>
      </label>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
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