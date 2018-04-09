import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
/* markedTrigger     itemStateTrigger      slideStateTrigger
showStateTrigger  listStateTrigger numberEnteredStateTrigger
*/
export const markedTrigger = trigger('markedState', [
    state('default', style({
        border: '1px solid black',
        backgroundColor: 'transparent',
        padding: '20px'
    })),
    state('marked', style({
        border: '2px solid blue',
        backgroundColor: '#caeff9',
        padding: '19px'
    })),
    transition('default => marked', [
        style({
            border: '2px solid black',
            padding: '19px'
        }),
        animate('200ms ease-out', style({
            transform: 'scale(1.03)'
        })),
        animate(200)
    ]),
    transition('marked => default', [
        style({
            border: '1px solid blue',
            padding: '20px'
        }),
        animate('200ms ease-in')
    ]),
    // transition('marked => default', animate('300ms ease-out')),
]);




//═════════════════════════════════════════
export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        animate('300ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            })
        ]))
    ]),
    transition(':leave', [
        animate('400ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateX(0)'
            }),
            style({
                transform: 'translateX(-15%)'
            }),
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            })
        ]))
    ]),
    transition('slidUp => slidDown', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition('slidDown => slidUp', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(-100%)'
        }))
    ])
]);
//══════════════════════════════════════════
export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-out', style({
            transform: 'translateY(-100%)'
        }))
    ])
]);
//══════════════════════════════════════════
export const showStateTrigger = trigger('showState', [
    //transition('void=> *', [style({
    //    opacity: 0
    //}),
    //animate(300)
    //]),
    //transition('* => void', animate(300, style({
    //    opacity: 0
    //})))

    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', animate(300, style({
        opacity: 0

    })))
]);
//══════════════════════════════════════════
export const listStateTrigger = trigger('listState', [
    //transition('void=> *', [style({
    //    opacity: 0
    //}),
    //animate(300)
    //]),
    //transition('* => void', animate(300, style({
    //    opacity: 0
    //})))

    transition(':enter', [
               style({
            opacity: 0,
            backgroundColor: 'white'
        }),
               group([animate(200, style({ opacity: 0.7 })),                // add animations you want to start together 089@2m56s


                   //animate(500, style({
                   //    backgroundColor : 'red'
                   //}))
                   //,]),

                   animate(200, keyframes([
                       style({ backgroundColor: 'white' }),
                       style({ backgroundColor: 'yellow' }),
                       style({ backgroundColor: '#c6dcee' }),         //0.91@3m42s

                   ]))  
                   ,]),




 //0.89@4m
       
               animate(1000, style({backgroundColor : 'lightblue'}))
    ]),
    transition(':leave', animate(300, style({
        opacity: 0

    })))
]);
//══════════════════════════════════════════
export const clickedStateTrigger = trigger('clickedState', [
    state('default', style({
        'background-color': 'yellow', 'width': '100px', 'height': '45px'
    })),

    state('clicked', style({
        'background-color': 'blue', 'width': '300px', 'height': '30px'
    })),

    state('mousedown', style({
        'backgroundColor': 'green',
        'border': '3px solid black',
        'width': '180px', 'height': '75px'
    })),

    transition('default => clicked', animate('600ms 200ms ease-in')),
    transition('clicked => default', animate(300)),
    transition('clicked <=> mousedown', animate(300))
])
//══════════════════════════════════════════

export const numberEnteredStateTrigger = trigger('numberEnteredState ', [
    state('unselected', style({
        border: '1px solid black',
        padding: '5px',
        backgroundColor: 'white'
    })),


    state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightblue'
    })),
    transition('unselected => selected', [
        style({
            border: '2px solid black',
            padding: '4px'
        }),
        animate(300),
        style({

            backgroundColor: 'red',
            transform: 'scale(1.25)'
        })
    ])
])
      














