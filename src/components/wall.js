export const wall = (onNavigate) => {
  const div = document.createElement("div");
  const logo = document.createElement('img');
  const fondo = document.createElement('img');
  const buttonSend = document.createElement("button");
  const buttonEdit = document.createElement("button")
  const buttonDelete = document.createElement("button")
  const buttonComment = document.createElement("button");
  const buttonLike = document.createElement("button");
  const buttonSingOff = document.createElement("button");
  const inputPost = document.createElement("input");
  const inputComment = document.createElement("input");


  inputPost.type = 'texto';
  inputComment.type = 'texto';


  fondo.id = 'fondo';
  div.id = 'section';
  buttonSend.className = 'send';
  buttonEdit.className = 'edit';
  buttonDelete.className = 'delete';
  buttonComment.className = 'comment';
  buttonLike.className = 'like';
  //buttonSignOff.className = 'cerrar sesión';//
  inputPost.id = 'post';
  inputComment.id = 'comment';


  logo.src = './imagenes/logo.png';
  logo.alt = 'Logo';

  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';


  buttonEdit.textContent = "Editar";
  buttonSingOff.textContent = "Cerrar Sesión";

  /*buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });
 
  button.addEventListener("click", () => {
    onNavigate("/");
  });*/


  div.append(logo, fondo, buttonSend, buttonEdit, buttonDelete, buttonComment, buttonLike, buttonSingOff, inputPost, inputComment);

  return div;
};
