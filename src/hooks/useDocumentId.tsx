import { useContext } from "react";
import { DocumentIdContext } from "../context/documentIdContext";
import { AutomergeUrl } from "@automerge/automerge-repo";

const useDocumentId = (): AutomergeUrl => {
  const documentId = useContext<unknown>(DocumentIdContext);

  return documentId;
};

export default useDocumentId;
