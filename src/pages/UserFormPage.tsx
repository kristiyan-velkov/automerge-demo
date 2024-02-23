import React from "react";
import UserForm from "../components/UserForm";
import useDocumentId from "../hooks/useDocumentId";
import { useDocument } from "@automerge/automerge-repo-react-hooks";
import { UserFormData } from "../types";

const UserFormPage: React.FC = () => {
  const docUrl = useDocumentId();
  const [doc, changeDoc] = useDocument<UserFormData>(docUrl);

  return <>{doc && <UserForm doc={doc} changeDoc={changeDoc} />}</>;
};

export default UserFormPage;
