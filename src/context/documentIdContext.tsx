import { ReactNode, createContext } from "react";
import { AutomergeUrl } from "@automerge/automerge-repo";

export const DocumentIdContext = createContext<unknown>("");

export const DocumentIdProvider = ({
  children,
  documentId,
}: {
  children: ReactNode;
  documentId: AutomergeUrl;
}) => (
  <DocumentIdContext.Provider value={documentId}>
    {children}
  </DocumentIdContext.Provider>
);
