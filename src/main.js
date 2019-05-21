const data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

const container = document.getElementById('list');

function createList(obj, container) {
  const list = document.createElement('ul');

  if (Object.keys(obj).length) {
    for (const key in obj) {
      let listItem = document.createElement('li')
      listItem.innerText = key;
      list.append(listItem);
      if (Object.keys(obj[key])) {
        createList(obj[key], listItem);
      }
    }
  }
  return container.append(list);
}

createList(data, container);
