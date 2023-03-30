export const wall = (onNavigate) => {
  const div = document.createElement("div");
  const dialog = document.createElement('dialog');
  dialog.innerText = 'Hola mundo';
  div.append(dialog)
  
  const logo2 = document.createElement('img');
  const fondo = document.createElement('img');
  const likeEmptyIcon = document.createElement('img', 'input');
  const likeFullIcon = document.createElement('img', 'input');
  const commentIcon = document.createElement('img', 'input');
  const deleteIcon = document.createElement('img', 'input');
  const buttonSend = document.createElement("button");
  buttonSend.addEventListener("click", function(){
    dialog.showModal()
  });
  const buttonEdit = document.createElement("button");
  const buttonSingOff = document.createElement("button");
  const inputPost = document.createElement("input");
  const inputComment = document.createElement("input");


  inputPost.type = 'texto';
  inputComment.type = 'texto';


  fondo.id = 'fondo';
  div.id = 'section';
  logo2.id = 'logo2';
  buttonSend.textContent = 'SEND';
  buttonSend.className = 'send';
  buttonEdit.className = 'edit';
  deleteIcon.className = 'delete';
  likeEmptyIcon.className = 'like1';
  likeFullIcon.className = 'like2';
  commentIcon.className = 'iconComment';
  inputPost.id = 'post';
  inputComment.id = 'comment';
  buttonSingOff.className = 'buttonSingOff';



  logo2.src = './imagenes/logo.png';
  logo2.alt = 'Logo';

  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';

  likeEmptyIcon.src = './imagenes/likeVacio.png';
  likeEmptyIcon.alt = 'Like1';

  likeFullIcon.src = './imagenes/likeLleno.png';
  likeFullIcon.alt = 'Like2';

  commentIcon.src = './imagenes/comentario.png';
  commentIcon.alt = 'comentario';

  deleteIcon.src = './imagenes/eliminar.png';
  deleteIcon.alt = 'eliminar';

  buttonEdit.textContent = "Editar";
  buttonSingOff.textContent = "Cerrar Sesión";

  /*buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });
 
  button.addEventListener("click", () => {
    onNavigate("/");
  });*/


  div.append(logo2, fondo, inputPost, buttonSend, buttonEdit, likeEmptyIcon, likeFullIcon, deleteIcon, commentIcon, inputComment, buttonSingOff);

  return div;
};
