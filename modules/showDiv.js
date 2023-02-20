/**
 * Menu Control
 *
 * @format
 */

const showDiv = (index, id) => {
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'none';
  document.getElementById('div3').style.display = 'none';
  document.getElementById('link1').classList.remove('active');
  document.getElementById('link2').classList.remove('active');
  document.getElementById('link3').classList.remove('active');

  id.classList.add('active');
  document.getElementById(index).style.display = 'block';
};

export default showDiv;