export const wall = (onNavigate) => {
  const div = document.createElement("div");
  const dialog = document.createElement('dialog');
  const inputShowModal = document.createElement("input");
  const buttonSend = document.createElement("button");
  const dialogAjustes = document.createElement('dialog');
  const deleteIcon = document.createElement('img');
  const buttonEdit = document.createElement("button");
  const adjustmentButtons = document.createElement('img');
  const logo2 = document.createElement('img');
  const fondo = document.createElement('img');
  const likeEmptyIcon = document.createElement('img', 'input');
  const likeFullIcon = document.createElement('img', 'input');
  const commentIcon = document.createElement('img', 'input');
  const buttonSingOff = document.createElement("button");
  const inputPost = document.createElement("input");
  const inputComment = document.createElement("input");
  const buttonsShowModal = document.createElement('img','button');

  inputShowModal.placeholder = "¿ Qué estás pensando ... ?"
  inputPost.placeholder = "¿ Qué estás pensando ... ?"
  
  inputPost.type = 'texto';
  inputComment.type = 'texto';
  adjustmentButtons.type = 'button';
  buttonsShowModal.type = 'button';

  fondo.id = 'fondo';
  div.id = 'section';
  logo2.id = 'logo2';
  dialog.id = "dialog";
  inputShowModal.id= "ShowModal";
  inputPost.id = 'post';
  inputComment.id = 'comment';

  buttonSend.textContent = 'SEND';
  buttonEdit.textContent = "Editar";
  buttonSingOff.textContent = "Cerrar Sesión";

  buttonSend.className = 'send';
  adjustmentButtons.className = 'adjustmentButtonsIcon';
  buttonsShowModal.className = 'ButtonsShowModal';
  buttonEdit.className = 'edit';
  deleteIcon.className = 'delete';
  likeEmptyIcon.className = 'like1';
  likeFullIcon.className = 'like2';
  commentIcon.className = 'iconComment';
  buttonSingOff.className = 'buttonSingOff';
  adjustmentButtons.className = 'adjustmentButtonsIcon';
  buttonsShowModal.className = 'ButtonsShowModal';
  dialogAjustes.className = "dialogAjustes";

  adjustmentButtons.src = './imagenes/adjustmentButtonsIcon.png';
  adjustmentButtons.alt = 'adjustmentButtons';

  deleteIcon.src = './imagenes/eliminar.png';

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

  adjustmentButtons.addEventListener("click", function () {
    dialogAjustes.showModal()
  });
  inputPost.addEventListener("click", function () {
    dialog.showModal()
    });

  dialog.appendChild(inputShowModal);
  dialog.appendChild(buttonSend);
  dialogAjustes.appendChild(buttonsShowModal);
  dialogAjustes.appendChild(buttonEdit);
  dialogAjustes.appendChild(deleteIcon);
 
  div.append(dialog, dialogAjustes, logo2, fondo, inputPost,adjustmentButtons, likeEmptyIcon, likeFullIcon, commentIcon,  inputComment, buttonSingOff);

  return div;
};