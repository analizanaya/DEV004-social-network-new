import { addDoc, collection } from "firebase/firestore";
import { db, auth, getPublicaciones } from "../Firebase/firebase";
import {post}from "../Firebase/authentication";
import { onNavigate } from '../router.js';

const buttonsShowModal = document.createElement('img', 'button');
const inputPost = document.createElement("input");

  const buttonSend = document.createElement("button");
  const inputShowModal = document.createElement("textarea");



  export const wall = () => {
  const div = document.createElement("div");
  const dialog = document.createElement('dialog');
 
  
  const buttonxIcon = document.createElement('img', 'button');
  const buttonxIcon2 = document.createElement('img', 'button');
  const dialogAjustes = document.createElement('dialog');
  //const deleteIcon = document.createElement('img');
  //agregado
  const buttonDelete = document.createElement("button");
  const buttonEdit = document.createElement("button");
  const adjustmentButtons = document.createElement('img');
  //agregado
 // const publicacionesContainer = document.createElement("textarea");
  const imgUser = document.createElement('img');
  const logo2 = document.createElement('img');
  const fondo = document.createElement('img');
  const likeEmptyIcon = document.createElement('img', 'input');
  const likeFullIcon = document.createElement('img', 'input');
  const commentIcon = document.createElement('img', 'input');
  const buttonSingOff = document.createElement("button");
  
  const inputComment = document.createElement("input");

  inputShowModal.placeholder = "¿ Qué estás pensando ... ?"
  inputPost.placeholder = "¿ Qué estás pensando ... ?"

  inputPost.type = 'texto';
  inputComment.type = 'texto';
  adjustmentButtons.type = 'button';
  //agregado
  imgUser.type = 'img';
  buttonsShowModal.type = 'button';
  buttonxIcon.type = 'button';
  buttonxIcon2.type = 'button';

  fondo.id = 'fondo';
  div.id = 'section';
  logo2.id = 'logo2';
  dialog.id = "dialog";
  inputShowModal.id = "ShowModal";
  inputPost.id = 'post';
  inputComment.id = 'comment';
   //agregado
  imgUser.id= 'imgUser';
  //publicacionesContainer.id= 'publicacionesContainer';

  buttonSend.textContent = 'SEND';
  buttonEdit.textContent = "Edit";
  //agregado
  buttonDelete.textContent = "Delete";
  buttonSingOff.textContent = "Cerrar Sesión";

  buttonSend.className = 'send';
  buttonxIcon.className = 'buttonX';
  buttonxIcon2.className = 'buttonX2';
  adjustmentButtons.className = 'adjustmentButtonsIcon';
  buttonsShowModal.className = 'ButtonsShowModal';
  buttonEdit.className = 'edit';
  //agregado
  buttonDelete.className = 'delete';
  //deleteIcon.className = 'delete';
  likeEmptyIcon.className = 'like1';
  likeFullIcon.className = 'like2';
  commentIcon.className = 'iconComment';
  buttonSingOff.className = 'buttonSingOff';
  adjustmentButtons.className = 'adjustmentButtonsIcon';
  buttonsShowModal.className = 'ButtonsShowModal';
  dialogAjustes.className = "dialogAjustes";

   //agregado          
  imgUser.src = './imagenes/user.png';
  imgUser.alt = 'imgUser';

  adjustmentButtons.src = './imagenes/adjustmentButtonsIcon.png';
  adjustmentButtons.alt = 'adjustmentButtons';

  //deleteIcon.src = './imagenes/eliminar.png';

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

  buttonxIcon.src = './imagenes/x.png';
  buttonxIcon.alt = 'equis';

  buttonxIcon2.src = './imagenes/x.png';
  buttonxIcon2.alt = 'equis';

  adjustmentButtons.addEventListener("click", function () {
    dialogAjustes.showModal()
  });
  inputPost.addEventListener("click", function () {
    dialog.showModal()
  });

  buttonSend.addEventListener('click',  () => {
    post(inputShowModal.value).then(response =>{
      return response
    }) 
    
   /* .then(() => {
      const publicaciones = document.createElement("p");
      publicaciones.textContent = inputShowModal.value;
      
      const publicacionesContainer = document.querySelector("#publicacionesContainer"); // Obtener el elemento que contenerá las tareas
      if (publicacionesContainer) { // Verificar si el elemento existe
        publicacionesContainer.appendChild(publicaciones);
        console.log(publicaciones)
      } else {
        console.error("No se encontró el elemento que contiene las tareas");
      }
      
      inputShowModal.value = "";
    });*/

  })
    dialog.close() 
   
   
    /* buttonSend.addEventListener("click", () => {
    const publicaciones = document.createElement("p");
    publicaciones.textContent = inputShowModal.value;
    
    const publicacionesContainer = document.querySelector("#publicacionesContainer"); // Obtener el elemento que contenerá las tareas
    if (publicacionesContainer) { // Verificar si el elemento existe
      publicacionesContainer.appendChild(publicaciones);
      console.log(publicaciones)
    } else {
      console.error("No se encontró el elemento que contiene las tareas");
    }
    
    inputShowModal.value = "";
  });*/
  
  buttonxIcon.addEventListener('click', function () {
    dialog.close()
  });

  buttonxIcon2.addEventListener('click', function () {
    dialogAjustes.close()
  });
 
 /* const publicacionesContainer = document.createElement("div");
  publicacionesContainer.id = 'publicacionesContainer';*/
  

  // Load the publicaciones from Firebase
  /*getPublicaciones().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Create a post element for each document
      const post = document.createElement("div");
      post.textContent = doc.data().text;
      publicacionesContainer.appendChild(post);
    });
  });*/
  buttonSingOff.addEventListener('click', ()=>{
    onNavigate('/');
  });
 // div.appendChild(publicacionesContainer);
  dialog.appendChild(inputShowModal);
  dialog.appendChild(buttonSend);
  dialog.appendChild(buttonxIcon);
  dialogAjustes.appendChild(buttonsShowModal);
  dialogAjustes.appendChild(buttonEdit);
  //agregado
  dialogAjustes.appendChild(buttonDelete);
  dialogAjustes.appendChild(buttonxIcon2);
  //dialogAjustes.appendChild(deleteIcon);

   //agregado imgUser
  div.append(dialog, dialogAjustes, logo2, fondo, inputPost, adjustmentButtons, imgUser, likeEmptyIcon, likeFullIcon, commentIcon, inputComment, buttonSingOff);

  return div;
};