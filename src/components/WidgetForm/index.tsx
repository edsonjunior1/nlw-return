import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";

//Objeto que guarda os tipos de feedback
export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada amarela",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um pensamento",
    },
  },
};

// Object.entries(feedbackTypes) => 
/**
 * [
 *  ['BUG', {conteudo}],
 *  ['IDEA', {conteudo}],
 *  ['THOUGHT', {conteudo}]
 * ] 
 */ 

export type FeedBackType = keyof typeof feedBackTypes;

export function WidgetForm() {
    const [feedBackType, setFeedBackType] = useState<FeedBackType | null>(null);

    function handleFeedback(){
        setFeedBackType(null);
    } 

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
    
      {!feedBackType ? (
            <FeedBackTypeStep onFeedBackTypeChanged={setFeedBackType} />
        ) : (
            <FeedBackContentStep 
                feedbackType={feedBackType}
                onFeedbackRestartRequested={handleFeedback} 
            />
        )
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/edsonjunior1">Edson Junior</a>
      </footer>
    </div>
  );
}
