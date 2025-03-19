import { createEffect } from "solid-js";
import { Accidental, Formatter, Renderer, Stave, StaveNote, Voice } from "vexflow";

type Props = {
    clef: "treble" | "bass",
    note: string,
    modifier?: "" | "#" | "b",
};

export default function Sheet(props: Props) {
    let ref!: HTMLDivElement;

    const render = (props: Props) => {
        // clear any previous render
        ref.replaceChildren();

        const renderer = new Renderer(ref, Renderer.Backends.SVG);
        renderer.resize(150, 150);
        const ctx = renderer.getContext().scale(1.5, 1.5);
        ctx.setFont("Arial", 10);
        const stave = new Stave(10, -10, 80);
        stave.addClef(props.clef);
        stave.setContext(ctx).draw();
        const note = new StaveNote({ keys: [props.note], duration: "q", clef: props.clef });
        props.modifier && note.addModifier(new Accidental(props.modifier));
        const voice = new Voice("1/4");
        voice.addTickable(note);
        new Formatter().joinVoices([voice]).format([voice]);
        voice.draw(ctx, stave);
    }

    createEffect(() => {
        render(props);
    });

    return (
        <div ref={ref}></div>
    );
}
