import React from "react";
import "../styles/FileExplorer.css";

interface ContextMenuProps {
  position: { x: number; y: number };
  onClose: () => void;
  fileName: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ position, onClose, fileName }) => {
  const handleAction = (action: string) => {
    console.log(`${action} ${fileName}`);
    onClose();
  };

  return (
    <div
      className="context-menu"
      style={{ top: position.y, left: position.x }}
    >
      <div onClick={() => handleAction("copy")}>Copy</div>
      <div onClick={() => handleAction("delete")}>Delete</div>
      <div onClick={() => handleAction("rename")}>Rename</div>
    </div>
  );
};

export default ContextMenu;
