import { useContext } from "react";
import { DocumentIdContext } from "../context/documentIdContext";

const useDocumentId = () => {
  const documentId = useContext(DocumentIdContext);

  return documentId;
};

export default useDocumentId;
