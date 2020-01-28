/* SPLIT VIEW */

setKeyHandler ( 'return', HYPER, () => {

  const space = Space.active (),
        windows = space.windows ().filter ( window => window.isVisible () && window.title () ),
        isActive = space.isNormal ();
  if ( windows.length < 2 ) return alert ( 'Split View - Only works with 2 windows' );
  let screenPortion  = Screen.main().frame().width / 4;
  if ( isActive) {
    windows[0].setFrame({x: 0, y: 0, width: screenPortion, height: '100%'})
    windows[1].setFrame({x: screenPortion, y: 0, width: screenPortion, height: '100%'})
  }
});
