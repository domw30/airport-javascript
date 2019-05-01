function Plane(){}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};

Plane.prototype.takeOff = function(airport){
  airport.clearForTakeOff(this);
}
