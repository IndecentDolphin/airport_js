describe('Plane', function(){
  var plane = new Plane;
  it('lands a plane (returns plane)', function(){
    expect(plane.land(plane)).toEqual(plane)
  });
});