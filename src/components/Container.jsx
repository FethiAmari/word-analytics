import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { INSTAGRAM_LIMIT, FACEBOOK_LIMIT } from "../lib/constans";

function Container( ) {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacter: text.length,
    numberOfWords: text
      .trim()
      .split(/\s+/)
      .filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_LIMIT - text.length,
    facebookCharacterleft: FACEBOOK_LIMIT - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
