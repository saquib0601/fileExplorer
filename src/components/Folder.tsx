import React, { useState } from "react";
import File from "./File";
import "../styles/FileExplorer.css";

interface FolderProps {
  folder: any;
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="folder" onClick={toggleExpand}>
        📁 {folder.name}
      </div>
      {expanded && (
        <div style={{ paddingLeft: "20px" }}>
          {folder.data.map((item: any, index: number) =>
            item.type === "folder" ? (
              <Folder key={index} folder={item} />
            ) : (
              <File key={index} file={item} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
