
export const wall = (onNavigate) => {
  const div = document.createElement("div");
  const dialog = document.createElement('dialog');
  dialog.id = "dialog";
  const inputShowModal = document.createElement("input");
  inputShowModal.placeholder = "¿ Qué estás pensando ... ?"
  const buttonSend = document.createElement("button");

  dialog.appendChild(inputShowModal);
  dialog.appendChild(buttonSend);


  
  const dialog2 = document.createElement('dialog');
  dialog2.id = "dialog2";
  const deleteIcon = document.createElement('img');
  const buttonEdit = document.createElement("button");
  dialog2.appendChild(deleteIcon);
  dialog2.appendChild(buttonEdit);

  

  const adjustmentButtons = document.createElement('img','dialog');
  adjustmentButtons.className = 'adjustmentButtonsIcon';
  /* adjustmentButtons.addEventListener("click", function () {
    dialog.showModal()
  }); */
  adjustmentButtons.addEventListener('click', function() {
    dialog2.showModal();
  });


  div.appendChild(dialog, dialog2);

  const logo2 = document.createElement('img');
  const fondo = document.createElement('img');
  
  const likeEmptyIcon = document.createElement('img', 'input');
  const likeFullIcon = document.createElement('img', 'input');
  const commentIcon = document.createElement('img', 'input');
  
  deleteIcon.src = './imagenes/eliminar.png';

 
  
  const buttonSingOff = document.createElement("button");
  const inputPost = document.createElement("input");
  inputPost.addEventListener("click", function () {
    dialog.showModal()
  });
  inputPost.placeholder = "¿ Qué estás pensando ... ?"
  const inputComment = document.createElement("input");
  
  inputPost.type = 'texto';
  inputComment.type = 'texto';

  fondo.id = 'fondo';
  div.id = 'section';
  logo2.id = 'logo2';

  
  inputShowModal.id= "ShowModal";
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

  adjustmentButtons.src = './imagenes/adjustmentButtonsIcon.png';
  adjustmentButtons.alt = 'adjustmentButtons';

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

  buttonEdit.textContent = "Editar";
  buttonSingOff.textContent = "Cerrar Sesión";


  div.append(logo2, fondo, inputPost,adjustmentButtons, likeEmptyIcon, likeFullIcon, commentIcon,  inputComment, buttonSingOff);

  return div;
};