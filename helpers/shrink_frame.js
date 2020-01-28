/* SHRINK FRAME */

function shrinkFrame ( direction, width, height, window = Window.focused () ) {

  if ( !window ) return;

  const screen = Screen.main (),
        frame = window.frame (),
        newFrame = _.cloneDeep ( frame );
      
      switch ( direction ) {
          case 'left':
              newFrame.width = frame.width - width;
          break;

          case 'right':
	      let oldWidth = frame.width;
	      if ( frame.width - width === oldWidth ) break;
	      window.setSize({ width: frame.width - width, height: frame.height })
              if ( window.size().width != oldWidth ) {
		newFrame.width = window.size().width;   
           	newFrame.x = frame.x + width;
	      }
          break;
	  
          case 'up':
	      newFrame.height = frame.height - height;             
          break;
	
	  case 'down':
	      let oldHeight = frame.height;
	      if ( frame.height - height === oldHeight ) break;
 	      window.setSize({ width: frame.width, height: frame.height - height })
	      if ( window.size().height != oldHeight ) {
	          newFrame.height = window.size().height;
		  newFrame.y = frame.y + height;
	      }
          break;
       }

  window.setFrame ( newFrame );
}
