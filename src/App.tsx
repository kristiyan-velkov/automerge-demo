import { AutomergeUrl } from "@automerge/automerge-repo";
import UserForm from "./UserForm";

function App({ docUrl }: { docUrl: AutomergeUrl }) {
  return <UserForm docUrl={docUrl} />;
}

export default App;
