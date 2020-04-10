import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

export const transAnimation = animation([
    style({
        height: '{{ height }}',
        width: '{{ width }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
]);