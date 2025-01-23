import { onMount } from "solid-js";
import { Factory } from "vexflow";

export default function Sheet(props: {
    bass?: boolean
}) {
    const id = "sheet-" + Math.floor(Math.random() * 10000);

    onMount(() => {
        const vf = new Factory({
            renderer: { elementId: id, width: 500, height: 200 },
        });

        const score = vf.EasyScore();
        const system = vf.System();

        system
            .addStave({
                voices: [
                    // score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),
                    score.voice(score.notes("f#3/q, B4, A4, G#4", { stem: "up" })),
                ],
            })
            .addClef(props.bass ? "bass" : "treble")
        // .addTimeSignature("4/4");

        vf.draw();
    });

    return (
        <div id={id}></div>
    );
}
