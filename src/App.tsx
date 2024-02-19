import { AutomergeUrl } from "@automerge/automerge-repo";
import UserForm from "./UserForm";
import { useDocument } from "@automerge/automerge-repo-react-hooks";

function App({ docUrl }: { docUrl: AutomergeUrl }) {
  const [doc, changeDoc] = useDocument(docUrl);

  return <>{doc && <UserForm doc={doc} changeDoc={changeDoc} />}</>;
}

export default App;
