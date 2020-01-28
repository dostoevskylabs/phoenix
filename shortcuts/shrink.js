/* SHRINK */

const shrink = [
  ['H', HYPER_SHIFT, ['up', 0, GROW_AMOUNT]],
  ['L', HYPER_SHIFT, ['right', GROW_AMOUNT, 0]],
  ['J', HYPER_SHIFT, ['down', 0, GROW_AMOUNT]],
  ['K', HYPER_SHIFT, ['left', GROW_AMOUNT, 0]]
];

setKeysHandler ( shrinkFrame, shrink, false );
