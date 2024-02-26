import React from "react";
import useDocumentId from "../hooks/useDocumentId";
import { useDocument } from "@automerge/automerge-repo-react-hooks";
import { UserFormData } from "../types";
import { SummaryCard } from "../components";

const UserCardPage: React.FC = () => {
  const docUrl = useDocumentId();
  const [doc] = useDocument<UserFormData>(docUrl);

  if (!doc) {
    return;
  }

  return <>{doc.form && <SummaryCard doc={doc.form} />}</>;
};

export default UserCardPage;
