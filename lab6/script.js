const form = document.querySelector('#form');
if(form) {
  let result;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let response = await fetch('./../ajax.php', {
      method: "POST",
      body: formData,
    });
    result = await response.json();
    if (result.success) {
      form.style.display='none';
      form.nextElementSibling.style.display = 'flex';
    } else {
      console.log('Не удалось получить успешный ответ от сервера');
    }
    return await result;
  });
}