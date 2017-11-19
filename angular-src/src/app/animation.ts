import {
  animate,
  animateChild,
  group,
  query as q,
  sequence,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export function query(s, a) {
  return q(s, a, { optional: true });
}

const original = '.75,-0.48,.26,1.52';
const slide = '1,1,0,0';

export const routerTransition = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', height: '100%', width: '100%' })
  ),
  query(':enter', style({ transform: 'translateX(100%)' })),
  sequence([
    query(':leave', animateChild()),
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate(
          `800ms cubic-bezier(${original})`,
          style({ transform: 'translateX(100%)' })
        )
      ]),
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          `800ms cubic-bezier(${original})`,
          style({ transform: 'translateX(0%)' })
        )
      ])
    ]),
    query(':enter', animateChild())
  ])
];

export const routerTransitionSlide = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', height: '100%', width: '100%' })
  ),
  query(':enter', style({ transform: 'translateX(100%)' })),
  sequence([
    query(':leave', animateChild()),
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate(
          `600ms cubic-bezier(${slide})`,
          style({ transform: 'translateX(100%)' })
        )
      ]),
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          `600ms cubic-bezier(${slide})`,
          style({ transform: 'translateX(0%)' })
        )
      ])
    ]),
    query(':enter', animateChild())
  ])
];


export const routerTransitionReverse = [
  query(
    ':enter, :leave',
    style({ position: 'fixed', height: '100%', width: '100%' })
  ),
  query(':enter', style({ transform: 'translateX(100%)' })),
  sequence([
    query(':leave', animateChild()),
    group([
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate(
          `600ms cubic-bezier(${slide})`,
          style({ transform: 'translateX(-100%)' })
        )
      ]),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(
          `600ms cubic-bezier(${slide})`,
          style({ transform: 'translateX(0%)' })
        )
      ])
    ]),
    query(':enter', animateChild())
  ])
];
