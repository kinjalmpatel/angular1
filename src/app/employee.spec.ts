import { Employee } from './employee';
//import { Employee } from './employee/experience';


describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});


// describe('Experience', () => {
//   it('should create an instance', () => {
//     expect(new Experience()).toBeTruthy();
//   });
// });
