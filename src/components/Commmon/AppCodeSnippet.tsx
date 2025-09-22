import { CheckIcon, CopyIcon } from "lucide-react";
import React, { useState } from "react";
import AppText from "./AppText";

interface AppCodeSnippetProps {
  code: string;
  title?: string;
}

const AppCodeSnippet: React.FC<AppCodeSnippetProps> = ({
  code,
  title = "Code snippet",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Split code into lines and remove empty lines at start/end
  const codeLines = code.split("\n").filter((line, index, array) => {
    if (index === 0 || index === array.length - 1) {
      return line.trim() !== "";
    }
    return true;
  });

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-code-header-background">
        <AppText className="text-sm font-semibold">{title}</AppText>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-semibold cursor-pointer"
        >
          {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          <span>Copy</span>
        </button>
      </div>
      <div className="relative bg-background-secondary p-4">
        <div className="flex">
          {/* Line numbers */}
          <div className="select-none pr-4 text-right text-sm text-text-tertiary">
            {codeLines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Code content */}
          <pre className="flex-1 overflow-x-auto text-sm">
            <code >
              {codeLines.map((line, i) => (
                <div key={i} className="text-text-primary">
                  {line}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AppCodeSnippet;
