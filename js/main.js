// const headersList = document.querySelector('.header__list');
// const headerLinks = document.querySelectorAll('.header__link');
// const sellersDescr = document.querySelector('.sellsers__descr');
// const input = document.querySelector('.mail__name');


// headersList.addEventListener('click', (e) => {
//   e.preventDefault();
//   headerLinks.forEach(link => {
//     if(!e.target == link) return;
//     newOpen();
//     link.addEventListener('selectstart', (e) => {

//     })

//   })
// })
// document.getSelection().toString() //Чтобы получить всё выделение
// // Как DOM-элементы: получите выделенные диапазоны и вызовите их метод cloneContents() (только первый диапазон, если мы не поддерживаем мультивыделение в Firefox).

// document.addEventListener('selectionchange', (e) => {//когда выделение изменено.

// })

// document.addEventListener('selectionchange', function() {
//   let cloned = document.createElement('div');
//   let astext = document.createElement('div');
//   let selection = document.getSelection();
//   cloned.innerHTML = astext.innerHTML = "";
//   // selection.removeAllRanges()// удалить все диапазоны.
//   // selection.deleteFromDocument()//удалить содержимое выделения из документа.
//   // selection.empty();//сокращение для removeAllRanges.
//   // removeRange(range) – удалить range из выделения.
//   // Клонируем DOM-элементы из диапазонов (здесь мы поддерживаем множественное выделение)
//   // selection.selectAllChildren(document)//выделить все дочерние узлы данного узла node.
//   // selection.collapseToEnd()//– схлопнуть диапазон к концу выделения,
//   // selection.collapseToStart();// – схлопнуть (заменить на пустой диапазон) к началу выделения,
//   // selection.collapse(document, 1)// – заменить выделенный диапазон новым, который начинается и заканчивается на node, на позиции offset.
//   // selection.setPosition(document, 1);//– то же самое, что collapse (дублирующий метод-псевдоним).
//   // selection.setBaseAndExtent(p, 0, p, p.childNodes.length);// – заменить диапазон выделения на заданные начало anchorNode/anchorOffset и
//   // конец focusNode/focusOffset. Будет выделено всё содержимое между этими границами
//   // selection.extend(document, 1);// – переместить фокус выделения к данному node, с позиции offset,
//   // getRangeAt(i) – взять i-ый диапазон, начиная с 0. Во всех браузерах, кроме Firefox, используется только 0.
//   // containsNode(node, allowPartialContainment = false) – проверяет, содержит ли выделение node (частично, если второй аргумент равен true)
//   // addRange(range) – добавить range в выделение. Все браузеры, кроме Firefox, проигнорируют этот вызов, если в выделении уже есть диапазон.
//   // for (let i = 0; i < selection.rangeCount; i++) {
//   //   cloned.append(selection.getRangeAt(i).cloneContents());
//   // }


//   // Получаем как текст
//   // astext.innerHTML += selection;
//   // console.log(`astext: ${astext.innerHTML}`);
//   // console.log(`cloned : ${cloned.innerHTML}`)
// });

// input.value = 'lknhjkbgvcfhvjbknmjl,'
// // input.selectionStart – позиция начала выделения (это свойство можно изменять),
// // input.selectionEnd – позиция конца выделения (это свойство можно изменять),
// // input.selectionDirection – направление выделения, одно из: «forward» (вперёд), «backward» (назад) или «none» (без направления, если, к примеру, выделено с помощью двойного клика мыши).
// input.addEventListener('select', (e) => {//срабатывает, когда начинается выделение.
//   // input.select();// выделяет всё содержимое input (может быть textarea вместо input),
//   // input.setSelectionRange(0, 0) //изменить выделение, чтобы начиналось с позиции start, и заканчивалось end, в данном направлении direction (необязательный параметр).
//   // input.setRangeText('Oloololll', 0, 4, 'select') //– заменяет выделенный текст в диапазоне новым.

//   // "select" – только что вставленный текст будет выделен.
// // "start" – диапазон выделения схлопнется прямо перед вставленным текстом (так что курсор окажется непосредственно перед ним).
// // "end" – диапазон выделения схлопнется прямо после вставленного текста (курсор окажется сразу после него).
// // "preserve" – пытается сохранить выделение. Значение по умолчанию.
// })

// // – 

// //

// // Если аргументы start и end указаны, то они задают начало и конец диапазона, иначе используется текущее выделение.

// // Последний аргумент, selectionMode, определяет, как будет вести себя выделение после замены текста. Возможные значения:




// function newOpen() {
//   let myWindow =   window.open("http://itchief.ru", "_blank", "top=100, left=100, width=400, height=500, scrollbars=yes, resizable=yes");
//   myWindow.focus();
//   // myWindow.opener.document.write('slkjdfnsc fdhg kdfkjbgv ')
//   myWindow.blur();
//   setTimeout(() => myWindow.close(), 5000)
// }

// rangeElement(sellersDescr, 0, 1)

// function rangeElement(elem, a, b) {
//   //Методы Range
//   let range = new Range();//Создание объекта выделения
//   // range.setStart(elem, a);//установить начальную границу в позицию offset в node
//   // range.setStartBefore(elem, a)//установить начальную границу прямо перед node
//   // range.setStartAfter(elem, a)//установить начальную границу прямо перед node

//   // range.setEnd(elem, b);// установить конечную границу в позицию offset в node
//   // range.setEndBefore(elem, b);// установить конечную границу прямо перед node
//   // range.setEndAfter(elem, b);//установить конечную границу прямо после node

//   //Как было показано, node может быть как текстовым узлом, так и элементом:
//     // для текстовых узлов offset пропускает указанное количество символов,
//     // в то время как для элементов – указанное количество дочерних узлов.

//   // range.selectNode(elem) // выделить node целиком
//   // range.selectNodeContents(elem); //выделить всё содержимое node
//   // range.collapse(true); // если указано toStart=true, установить конечную границу в начало,
//   // иначе установить начальную границу в конец, схлопывая таким образом диапазон
//   // let cloneOfRange =  range.cloneRange(); //создать новый диапазон с идентичными границами
//   // console.log(cloneOfRange);
//   //Чтобы манипулировать содержимым в пределах диапазона:

//   // range.deleteContents(); //удалить содержимое диапазона из документа
//   // range.extractContents(); //  удалить содержимое диапазона из документа и вернуть как DocumentFragment
//   // let clone = range.cloneContents(elem);//склонировать содержимое диапазона и вернуть как DocumentFragment
//   // console.log(clone)
//   // range.insertNode(elem); //  вставить node в документ в начале диапазона
//   // range.surroundContents(); // обернуть node вокруг содержимого диапазона.
//   // Чтобы этот метод сработал, диапазон должен содержать как открывающие,
//   // так и закрывающие теги для всех элементов внутри себя: не допускаются частичные диапазоны по типу <i>abc.

//   console.log(`startContainer: ${range.startContainer}`);//узел
//   console.log(`startOffset: ${range.startOffset}`);//начальное смещение
//   console.log(`endContainer: ${range.endContainer}`);//узел
//   console.log(`endOffset: ${range.endOffset}`);//конечное смещение
//   console.log(`collapse: ${range.collapse}`);//если диапазон начинается и заканчивается на одном и том же месте (следовательно, в диапазон ничего не входит),
//   console.log(`commonAncestorContainer: ${range.commonAncestorContainer}`);//ближайший общий предок всех узлов в пределах диапазона
//   document.getSelection().addRange(range);//Добавление объекта выделения

//   //Selection

//   let {anchorNode, anchorOffset, focusNode, focusOffset, rangeCount, isCollapsed} = document.getSelection();
//   console.log(`anchorNode : ${anchorNode}`);//узел, с которого начинается выделение,
//   console.log(`anchorOffset : ${anchorOffset}`);//смещение в anchorNode, где начинается выделение,
//   console.log(`focusNode : ${focusNode}`);//узел, на котором выделение заканчивается,
//   console.log(`focusOffset : ${focusOffset}`);//смещение в focusNode, где выделение заканчивается,
//   console.log(`rangeCount : ${rangeCount}`);//количество диапазонов в выделении, максимум 1 во всех браузерах, кроме Firefox.
//   console.log(`isCollased : ${isCollapsed}`)//true, если диапазон выделения пуст или не существует.true, если диапазон выделения пуст или не существует.
// } 

// //Mutation observer

// let options = {
//   childList: true,
//   attributes: true,
//   chasterData: true,
//   subtree: true,
//   // attributeFilter: true,
//   attributeOldValue: true,
//   chastreDataOldValue: true
// }

// let observer = new MutationObserver(callback);

// function callback(mutations) {
//   for(let mutation of mutations) {
//     console.log(mutation);
//   }
// }

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // читаем ответ в формате JSON

// alert(commits[0].author.login);
// //
// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));
// //
// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// let text = await response.text(); // прочитать тело ответа как текст

// alert(text.slice(0, 80) + '...');
// //
// let response = await fetch('/article/fetch/logo-fetch.svg');

// let blob = await response.blob(); // скачиваем как Blob-объект

// // создаём <img>
// let img = document.createElement('img');
// img.style = 'position:fixed;top:10px;left:10px;width:100px';
// document.body.append(img);

// // выводим на экран
// img.src = URL.createObjectURL(blob);

// setTimeout(() => { // прячем через три секунды
//   img.remove();
//   URL.revokeObjectURL(img.src);
// }, 3000);

let url = 'https://api.github.com/users/USERNAME';
let names = ['iliakan', 'remy', 'no.such.users'];
async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`)
      .then(
        successResponse => {
          if(successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
      failResponse => {
        return null;
        }
      );
      jobs.push(job);
  }
  let results = await Promise.all(jobs);
  console.log(results)
  return results;
}

getUsers(names)

