import myApp from '../src/index';
describe('myApp', () => {
   if('При клике на элемент, который указан в data-toggl-target добавляется класс указанный data-toggl-add на указанный блок', () => {
       expect(element.classList.contains('active')).toBe(true);
   })
});




