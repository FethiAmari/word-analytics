import { useState } from "react";
import Warning from "./Warning";

function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newWord = e.target.value;

    if (newWord.includes("<script>")) {
      setWarningText("No script tag allowed");
      newWord = newWord.replace("<script>", "");
    } else if (newWord.includes("@")) {
      setWarningText("No @ symbol is allowed");
      newWord = newWord.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newWord);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}

export default TextArea;
