var Player : GameObject;


function OnTriggerEnter (other : Collider) {

if (other.gameObject == Player)


animation.CrossFade("AutoDoor");
}

function OnTriggerExit (other : Collider) {

if (other.gameObject == Player)


animation.CrossFade("AutoDoorClose");
}
