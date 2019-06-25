describe('Airport', function(){
  var airport = new Airport;
  var plane = new Plane;
  it("Should land a plane", function(){
    airport.land(plane)
    expect(airport.hanger.length).toEqual(1)
  });
  it("Should ")
});