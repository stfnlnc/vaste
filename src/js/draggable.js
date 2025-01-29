import {gsap} from "gsap";
import {Draggable} from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";

window.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(Draggable, InertiaPlugin);

    const postWrapper = document.getElementById('post-wrapper')
    const postDragContainer = document.getElementById('post-drag-container')

    Draggable.create(postWrapper, {
        type: "x",
        bounds: postDragContainer,
        inertia: true,
        dragResistance: 0.2,
        dragClickables: true
    })

    const magazineWrapper = document.getElementById('magazine-wrapper')
    const magazineDragContainer = document.getElementById('magazine-drag-container')

    Draggable.create(magazineWrapper, {
        type: "x",
        bounds: magazineDragContainer,
        inertia: true,
        dragResistance: 0.2,
        dragClickables: true
    })

})