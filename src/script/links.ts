import { data } from '../data/state';

const linksList = document.querySelector('.links__list') as HTMLUListElement;
const addContainer = document.querySelector('.links__add-container') as HTMLElement;
const saveBtn = document.querySelector('.links__save') as HTMLElement;
const cancelBtn = document.querySelector('.links__cancel') as HTMLElement;
const linkNameInput = document.getElementById('link-name') as HTMLInputElement;
const linkHrefInput = document.getElementById('link-href') as HTMLInputElement;
const linksBTN = document.querySelector('.links__button') as HTMLElement;
const linksContainer = document.querySelector('.links') as HTMLElement;

let editedLinkName = '';
let editedLinkHref = '';

const showLinks = () => {
  linksContainer.classList.toggle('visibility');
};

const deleteLink = (element: HTMLElement) => {
  element.parentElement?.parentElement?.remove();
};

const showAddPanel = () => {
  addContainer.classList.remove('hidden');
};

const createLink = (link: { name: string; href: string }) => {
  const changeContainer = document.createElement('div');
  changeContainer.classList.add('links__change');
  const editBtn = document.createElement('button');
  editBtn.classList.add('links__edit');
  editBtn.innerText = data.state.language === 'en' ? 'edit' : 'изменить';
  const deleteBtn = document.createElement('div');
  deleteBtn.classList.add('links__delete');
  const li = document.createElement('li');
  li.classList.add('links__li');
  const anchor = document.createElement('a');
  anchor.classList.add('links__anchor');
  anchor.target = '_blank';
  anchor.innerText = link.name;
  anchor.href = link.href;
  changeContainer.append(editBtn, deleteBtn);
  li.append(anchor, changeContainer);
  linksList.prepend(li);
};

export const fillList = () => {
  linksList.innerHTML = '';
  data.state.links.map((item) => createLink(item));
  const addButton = document.createElement('button');
  addButton.classList.add('links__add');
  addButton.textContent = data.state.language === 'en' ? 'add' : 'добавить';
  linksList.append(addButton);
  addButton.addEventListener('click', () => showAddPanel());
};

const changeLink = (e: Event) => {
  const element = e.target as HTMLElement;
  if (element.classList.contains('links__delete')) {
    deleteLink(element);
  } else if (element.classList.contains('links__edit')) {
    deleteLink(element);
    addContainer.classList.remove('hidden');
    const linkElement = element.parentElement?.previousSibling as HTMLAnchorElement;
    editedLinkName = linkElement.textContent as string;
    editedLinkHref = linkElement.href;

    linkNameInput.value = editedLinkName;
    linkHrefInput.value = editedLinkHref;
    showAddPanel();
  }
};

export const changeLinksState = () => {
  const newLinks = document.querySelectorAll('.links__anchor') as NodeListOf<HTMLAnchorElement>;
  const newArray: { name: string; href: string }[] = [];
  newLinks.forEach((item) => {
    newArray.push({ name: item.textContent as string, href: item.href });
  });
  data.state.links = newArray;
};

export const handleLink = () => {
  linksList.addEventListener('click', changeLink);
  linksBTN.addEventListener('click', showLinks);
};

const handleSaveLink = (e: Event) => {
  e.preventDefault();
  if (!linkNameInput.value || !linkHrefInput.value) {
    const validityMessage = `${data.state.language === 'en' ? 'fill in the field' : 'заполните поле'}`
    linkNameInput.setCustomValidity(validityMessage);
    linkHrefInput.setCustomValidity(validityMessage);
    !linkNameInput.value ? linkNameInput.reportValidity() : linkHrefInput.reportValidity();
    return;
  }
  addContainer.classList.add('hidden');
  createLink({ name: linkNameInput.value, href: linkHrefInput.value });
  editedLinkName = '';
  editedLinkHref = '';
};

const handleCancel = (e: Event) => {
  e.preventDefault();
  addContainer.classList.add('hidden');
  if (editedLinkName) createLink({ name: editedLinkName, href: editedLinkHref });
  editedLinkName = '';
  editedLinkHref = '';
};

export const addLinkListener = () => {
  saveBtn.addEventListener('click', handleSaveLink);
  cancelBtn.addEventListener('click', handleCancel);
}
