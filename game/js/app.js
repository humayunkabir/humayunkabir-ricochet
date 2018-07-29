const app = document.getElementById('app');

document.addEventListener('DOMContentLoaded', function() {
  app.classList.add('app');
  app.innerHTML = `<button class='btn btn-primary' onclick='publish()'>Inaugurating Alumni Connect</button>`;
});



const publish = () => {
  app.classList.remove('app');
  app.innerText = 'Published';
};
