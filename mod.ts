import { tags, Observable, Subject } from "https://gnlow.dev/uwu@0.0.0-beta.1"

const { div } = tags

const p$ = new Subject<PointerEvent>

export default div.onpointerdown(p$)(
    "hello",
    p$.map(e => `${e.clientX}, ${e.clientY}`),
)
