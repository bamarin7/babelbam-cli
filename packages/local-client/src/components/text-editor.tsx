import MDEditor from "@uiw/react-md-editor";
import React, { useState, useEffect, useRef } from "react";
import './text-editor.css';
import { Cell } from "../state";
import { useActions } from "../hooks/use-actions";


interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

  useEffect(() => {
    // Sets edit mode to false when user not inside editor
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      setEditing(false);
    };
    // Sets editing mode to false when user presses ESC
    const escListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setEditing(false);
      }
    };
    document.addEventListener('click', listener, { capture: true });
    document.addEventListener('keydown', escListener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
      document.removeEventListener('keydown', escListener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref} >
        <MDEditor value={cell.content} onChange={(t) => updateCell(cell.id, t || '')} />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)} >
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  )
};

export default TextEditor;
