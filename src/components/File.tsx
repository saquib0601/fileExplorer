import React, { useState } from "react";
import ContextMenu from "./ContextMenu";
import FileIcon from "./FileIcon";
import "../styles/FileExplorer.css";

interface FileProps {
  file: {
    type: string;
    meta: string;
    name: string;
  };
}

const File: React.FC<FileProps> = ({ file }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowContextMenu(true);
    setContextMenuPosition({ x: event.pageX, y: event.pageY });
  };

  const handleContextMenuClose = () => {
    setShowContextMenu(false);
    setContextMenuPosition(null);
  };

  return (
    <div className="file" onContextMenu={handleContextMenu}>
      <FileIcon fileType={file.meta} /> {file.name}
      {showContextMenu && contextMenuPosition && (
        <ContextMenu
          position={contextMenuPosition}
          onClose={handleContextMenuClose}
          fileName={file.name}
        />
      )}
    </div>
  );
};

export default File;
