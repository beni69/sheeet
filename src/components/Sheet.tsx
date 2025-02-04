import { onMount } from "solid-js";
import { Accidental, EasyScore, Factory, Formatter, Renderer, Stave, StaveNote, Voice } from "vexflow";

export default function Sheet(props: {
    clef: "treble" | "bass",
    note: string,
    modifier?: "" | "#" | "b",
}) {
    const id = "sheet-" + Math.floor(Math.random() * 10000);

    let ref!: HTMLDivElement;

    onMount(() => {
        // const vf = new Factory({
        //     renderer: { elementId: id, width: 500, height: 200 },
        // });
        //
        // const score = vf.EasyScore();
        // const system = vf.System();
        //
        // system
        //     .addStave({
        //         voices: [
        //             // score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),
        //             score.voice(score.notes("C4/q, c4, b4, d4", { stem: "up" })),
        //         ],
        //     })
        //     .addClef(props.bass ? "bass" : "treble")
        // // .addTimeSignature("4/4");
        //
        // vf.draw();

        const renderer = new Renderer(ref, Renderer.Backends.SVG);
        renderer.resize(500, 200);
        const ctx = renderer.getContext();
        ctx.setFont("Arial", 10);
        const stave = new Stave(10, 40, 100);
        stave.addClef(props.clef);
        stave.setContext(ctx).draw();
        const note = new StaveNote({ keys: [props.note], duration: "q", });
        props.modifier && note.addModifier(new Accidental(props.modifier));
        // const note = new EasyScore({}).notes("C#5/q, b4, a4, g#4");
        const voice = new Voice("1/4");
        voice.addTickable(note);
        new Formatter().joinVoices([voice]).format([voice]);
        voice.draw(ctx, stave);
    });

    return (
        <div id={id} ref={ref}></div>
    );
}
