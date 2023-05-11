import { createContext, ReactNode, useCallback, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";

type InputFileContextProps = {
  onDrop: (files: File[]) => void;
  removeFile: () => void;
  dropZone: DropzoneState;
  file: File | null 
}

type InputFileProviderProps = {
  children: ReactNode
}

export const InputFileContext = createContext({} as InputFileContextProps)

export const InputFileProvider = ({ children }: InputFileProviderProps) => {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0])
  }, [])

  const removeFile = useCallback(() => {
    setFile(null)
  }, [])

  const dropZone = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    }
  })


  return (
    <InputFileContext.Provider value={{ 
      onDrop,
      removeFile,
      dropZone,
      file
     }}>
      {children}
    </InputFileContext.Provider>
  )
}