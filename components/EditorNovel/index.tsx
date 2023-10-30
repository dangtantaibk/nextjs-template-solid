"use client"
import React from "react";
import '@notion-render/client/sass/theme.scss';
import { Editor } from "novel";

interface EditorNovelProps {
  contentAdmin: string;
}

const EditorNovel = (props: EditorNovelProps) => {
  const { contentAdmin } = props;
  return (
    <Editor
      defaultValue={JSON.parse(contentAdmin)}
      editorProps={{
        editable: () => { return false },
        handleDrop: () => { return false },
        handlePaste: () => { return false },
        handleClick: () => { return true },
        handleDoubleClick: () => { return true },
        handleTripleClick: () => { return true },
        handleDoubleClickOn: () => { return true },
        handleTripleClickOn: () => { return true },
        handleTextInput: () => { return false },
      }}
      disableLocalStorage={true}
      className="border-stroke min-h[300px] max-h[500px]"
    />
  );
}

export default EditorNovel;