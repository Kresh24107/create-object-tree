let data = {
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

let list = document.getElementById('list');
let elem = '';

function createList(obj) {
  elem += '<ul>'
  if (Object.keys(obj).length > 0) {
    for (const key in obj) {
      console.log(key)
      elem += '<li>' + key;
      if (Object.keys(obj[key]).length > 0) {
        createList(obj[key]);
      }
      elem += '</li>'
    }
  }
  elem += '</ul>';
  console.log(elem);
  return list.innerHTML = elem;
}

createList(data);
