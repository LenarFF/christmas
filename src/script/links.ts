import { data } from "../data/state"

const linksList = document.querySelector('.links__list') as HTMLUListElement;
const addContainer = document.querySelector('.links__add-container') as HTMLElement;
const saveBtn = document.querySelector('.links__save') as HTMLElement;
const linkNameInput = document.getElementById('link-name') as HTMLInputElement;
const linkHrefInput = document.getElementById('link-href') as HTMLInputElement;

const deleteLink = (element: HTMLElement) => {
  element.parentElement?.parentElement?.remove();
  console.log('del')
}

const showAddPanel = () => {
  addContainer.classList.remove('hidden');
  handleLink();
};

const createLink = (link: { name: string; href: string }) => {
  console.log(1)
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
  anchor.classList.add('links_anchor');
  anchor.target = '_blank';
  anchor.innerText = link.name;
  anchor.href = link.href;
  changeContainer.append(editBtn, deleteBtn);
  li.append(anchor, changeContainer);
  linksList.prepend(li);
};

export const fillList = () => {
  data.state.links.map((item) => createLink(item));
  const addButton = document.createElement('button');
  addButton.classList.add('links__add');
  addButton.textContent = data.state.language === 'en' ? 'add' : 'добавить';
  linksList.append(addButton);
  addButton.addEventListener('click', () =>
    showAddPanel(),
  );
};

const changeLink = (e: Event) => {
  const element = e.target as HTMLElement
  if (element.classList.contains('links__delete')) {
    deleteLink(element);
  } else if (element.classList.contains('links__edit')) {
    addContainer.classList.remove('hidden');
    deleteLink(element);
    const linkElement = element.parentElement?.previousSibling as HTMLAnchorElement;
      linkNameInput.value = linkElement.textContent as string;
      linkHrefInput.value = linkElement.href;
      showAddPanel();
  }
};

export const changeLinksState = () => {
  const newLinks = document.querySelectorAll('.links_anchor') as NodeListOf<HTMLAnchorElement>;
  const newArray: {name: string, href: string}[] = []
  newLinks.forEach(item => {
    newArray.push({name: (item.textContent as string), href: item.href})
  })
  data.state.links = newArray;
}

export const handleLink = () => {
  linksList.addEventListener('click', changeLink);
}

export const saveLink = () => {
    saveBtn.addEventListener('click', () => {
      addContainer.classList.add('hidden');
      console.log('show');
      createLink({ name: linkNameInput.value, href: linkHrefInput.value });
    });
}