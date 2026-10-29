// Render only after a scene change, and while camera damping is still moving.
export function demandRenderer({render,update=()=>false,visible=()=>true,requestFrame=requestAnimationFrame}){
 let pending=false,dirty=false;
 function frame(){pending=false;if(!visible())return;const requested=dirty;dirty=false;const moved=update();if(requested||moved)render();if(moved)invalidate();}
 function invalidate(){dirty=true;if(!pending&&visible()){pending=true;requestFrame(frame);}}
 return invalidate;
}
