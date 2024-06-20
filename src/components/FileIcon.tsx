import React from "react";
import "../styles/FileExplorer.css";

interface FileIconProps {
  fileType: string;
}

const FileIcon: React.FC<FileIconProps> = ({ fileType }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "js":
        return "🟨"; // JavaScript file icon
      case "ts":
        return "🟦"; // TypeScript file icon
      case "html":
        return "🟥"; // HTML file icon
      case "css":
        return "🟩"; // CSS file icon
      case "img":
        return "🖼️"; // Image file icon
      case "svg":
        return "🔶"; // SVG file icon
      default:
        return "📄"; // Default file icon
    }
  };

  return <span className="file-icon">{getIcon(fileType)}</span>;
};

export default FileIcon;
