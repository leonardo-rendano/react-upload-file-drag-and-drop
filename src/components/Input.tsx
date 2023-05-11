import { DropzoneState } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";

interface InputProps {
  dropzone: DropzoneState
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

export default Input