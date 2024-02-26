import React from "react";
import ReactDOM from "react-dom/client";
import {
  isValidAutomergeUrl,
  Repo,
  AutomergeUrl,
} from "@automerge/automerge-repo";
import { RepoContext } from "@automerge/automerge-repo-react-hooks";
import App from "./App";
import { UserFormData } from "./types";
import { DocumentIdProvider } from "./context/documentIdContext";
import "./index.css";

import { IndexedDBStorageAdapter } from "@automerge/automerge-repo-storage-indexeddb";
import { BrowserWebSocketClientAdapter } from "@automerge/automerge-repo-network-websocket";

const repo = new Repo({
  network: [new BrowserWebSocketClientAdapter("wss://sync.automerge.org")],
  storage: new IndexedDBStorageAdapter(),
});

function toAutomergeUrl(url: string): AutomergeUrl {
  return url as AutomergeUrl;
}

// const handle = repo.create<{ form: UserFormData }>();
const handle = repo.find(toAutomergeUrl("2b47BcwXm2LaDQwWgR1oCmqZoR2r"));
const docUrl = (document.location.hash = handle.url);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RepoContext.Provider value={repo}>
      <DocumentIdProvider documentId={docUrl}>
        <App />
      </DocumentIdProvider>
    </RepoContext.Provider>
  </React.StrictMode>
);
