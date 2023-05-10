import {
  post,
  getPost,
  deletePosta,
  editPost,
} from '../Firebase/authentication';
import { onNavigate } from '../router';

export const wall = () => {
  const buttonSend = document.createElement('btn');
  const inputShowModal = document.createElement('textarea');
  const section = document.createElement('section');
  const dialog = document.createElement('dialog');
  const buttonxIcon = document.createElement('img', 'btn');
  const taskContainer = document.createElement('section');
  const imgUser = document.createElement('img');
  const logo2 = document.createElement('img');
  const fondo = document.createElement('img');
  const likeEmptyIcon = document.createElement('img', 'input');
  const likeFullIcon = document.createElement('img', 'input');
  const buttonSingOff = document.createElement('btn');
  const buttonsShowModal = document.createElement('img', 'btn');
  const inputPost = document.createElement('input');

  inputShowModal.placeholder = '¿ Qué estás pensando ... ?';
  inputPost.placeholder = '¿ Qué estás pensando ... ?';

  inputPost.type = 'texto';
  imgUser.type = 'img';
  buttonsShowModal.type = 'btn';
  buttonxIcon.type = 'btn';

  fondo.id = 'fondo';
  section.id = 'section';
  logo2.id = 'logo2';
  dialog.id = 'dialog';
  inputShowModal.id = 'ShowModal';
  inputPost.id = 'post';
  imgUser.id = 'imgUser';
  taskContainer.id = 'taskContainer';

  buttonSend.textContent = 'Send';
  buttonSingOff.textContent = 'Cerrar Sesión';

  buttonSend.className = 'send';
  buttonxIcon.className = 'buttonX';
  likeEmptyIcon.className = 'likeEmptyIcon';
  likeFullIcon.className = 'likeFullIcon';
  buttonSingOff.className = 'buttonSingOff';
  buttonsShowModal.className = 'ButtonsShowModal';

  imgUser.src = './imagenes/user.png';
  imgUser.alt = 'imgUser';
  logo2.src = './imagenes/logo.png';
  logo2.alt = 'Logo';
  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';
  likeEmptyIcon.src = './imagenes/likeVacio.png';
  likeEmptyIcon.alt = 'Like1';
  likeFullIcon.src = './imagenes/likeLleno.png';
  likeFullIcon.alt = 'Like2';
  likeFullIcon.style.display = 'none';
  buttonxIcon.src = './imagenes/x.png';
  buttonxIcon.alt = 'equis';

  getPost((querySnapshot) => {
    const listPost = document.createElement('article');
    taskContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      const postContent = document.createElement('textarea');
      postContent.textContent = doc.data().contenido;
      const buttonDeleteIcon = document.createElement('img');
      const buttonEditIcon = document.createElement('img');

      buttonDeleteIcon.setAttribute('data-id', doc.id);
      buttonEditIcon.setAttribute('data-id', doc.id);
      postContent.id = 'comments';
      buttonEditIcon.className = 'edit';
      buttonEditIcon.id = `edit${doc.id}`;
      buttonEditIcon.src = './imagenes/buttonEditIcon.png';
      buttonEditIcon.alt = 'Edit';
      buttonDeleteIcon.src = './imagenes/buttonDeleteIcon.png';
      buttonDeleteIcon.alt = 'Delete';
      buttonDeleteIcon.className = 'delete';

      const likeEmptyIconClone = likeEmptyIcon.cloneNode(true);
      const likeFullIconClone = likeFullIcon.cloneNode(true);

      postContent.value = doc.data().contenido;

      let liked = false;
      likeEmptyIconClone.addEventListener('click', () => {
        if (!liked) {
          likeFullIconClone.src = './imagenes/likeLleno.png';
          likeFullIconClone.style.display = 'block';
          likeEmptyIconClone.style.display = 'none';
          liked = true;
          // console.log('liked');
        }
      });
      likeFullIconClone.addEventListener('click', () => {
        if (liked) {
          likeEmptyIconClone.src = './imagenes/likeVacio.png';
          likeEmptyIconClone.style.display = 'block';
          likeFullIconClone.style.display = 'none';
          liked = false;
          // console.log('no liked');
        }
      });
      listPost.append(
        postContent,
        likeEmptyIconClone,
        likeFullIconClone,
        buttonDeleteIcon,
        buttonEditIcon,
        buttonDeleteIcon,
        buttonEditIcon,
      );
      taskContainer.append(listPost);

      const btnEdit = document.getElementById(`edit${doc.id}`);
      btnEdit.addEventListener('click', (e) => {
        const textoEditado = postContent.value;
        console.log('Guardando...', textoEditado);
        editPost(e.target.dataset.id, textoEditado);
      });

      const btnDelete = taskContainer.querySelectorAll('.delete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePosta(dataset.id);
        });
      });
    });
  });

  buttonSend.addEventListener('click', () => {
    post(inputShowModal.value).then((response) => response);
    dialog.close();
    const contentNew = inputShowModal.value;
    const container = document.querySelector('#taskContainer'); // Obtener el elemento que contenerá las tareas
    if (container) {
      taskContainer.append(contentNew);
      console.log(contentNew);
    } else {
      alert('No se encontró el elemento que contiene las tareas');
    }
    inputShowModal.value = '';
  });

  inputPost.addEventListener('click', () => {
    dialog.showModal();
  });

  buttonxIcon.addEventListener('click', () => {
    dialog.close();
  });

  buttonSingOff.addEventListener('click', () => {
    onNavigate('/');
  });

  dialog.appendChild(inputShowModal);
  dialog.appendChild(buttonSend);
  dialog.appendChild(buttonxIcon);
  section.append(
    dialog,
    logo2,
    fondo,
    inputPost,
    taskContainer,
    imgUser,
    buttonSingOff,
  );
  return section;
};