import UserForm from "./UserForm";
import { useDocument } from "@automerge/automerge-repo-react-hooks";
import useDocumentId from "./hooks/useDocumentId";

function App() {
  const docUrl = useDocumentId();
  const [doc, changeDoc] = useDocument(docUrl);

  return <>{doc && <UserForm doc={doc} changeDoc={changeDoc} />}</>;
}

export default App;
