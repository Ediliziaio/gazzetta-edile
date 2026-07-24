// "Risposta rapida" — AEO answer box. Short, self-contained, extractable.

export function AnswerBox({ text }: { text: string }) {
  return (
    <aside
      className="my-6 rounded-sm border-l-4 border-bordeaux bg-bordeaux-tint/60 p-4 sm:p-5"
      aria-label="Risposta rapida"
    >
      <p className="mb-1 text-[0.7rem] font-bold uppercase tracking-widest text-bordeaux">
        Risposta rapida
      </p>
      <p className="text-[1.02rem] leading-relaxed text-charcoal">{text}</p>
    </aside>
  );
}
