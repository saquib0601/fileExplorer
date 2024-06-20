import React from "react";
import Folder from "./Folder";
import { files } from "../data/files";
import "../styles/FileExplorer.css";

const FileExplorer: React.FC = () => {
  return (
    <div className="file-explorer">
      <Folder folder={files} />
    </div>
  );
};

export default FileExplorer;
