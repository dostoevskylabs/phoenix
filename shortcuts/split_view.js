/* SPLIT VIEW */

let spaceData = {};
setKeyHandler ( 'return', HYPER, () => {

  const thisSpace = Space.active (),
        windows = thisSpace.windows ().filter ( window => window.isVisible () && window.title () ),
        isActive = thisSpace.isNormal ();
  Phoenix.log(JSON.stringify(thisSpace))
  let space = thisSpace.hash();

  if ( windows.length !== 2 ) return alert ( 'Split View - Only works with 2 windows' );
  let screenPortion  = Screen.main().frame().width / 2;
  if ( isActive ) {
    if ( !spaceData[space] ) spaceData[space] = {}
    spaceData[space].enabled = spaceData[space].enabled ?  true : false;
    if ( spaceData[space].enabled ) {
      spaceData[space].enabled = false;
      if ( spaceData[space].lastA && spaceData[space].lastB ) { 
        windows[0].setFrame(spaceData[space].lastA);
        windows[1].setFrame(spaceData[space].lastB);
        spaceData[space].lastA = null;
        spaceData[space].lastB = null;
      }
    } else {
      spaceData[space].enabled = true;
      spaceData[space].lastA = windows[0].frame();
      spaceData[space].lastB = windows[1].frame();
      windows[0].setFrame({x: 0, y: 0, width: screenPortion, height: '100%'})
      windows[1].setFrame({x: screenPortion, y: 0, width: screenPortion, height: '100%'})
    }
  }
});
