let counter = 0; // Создаем счетчик
const slides = document.querySelectorAll('.slide' ); // Получаем все слайды из первого слайда
    
const nextSlide = (items) => {  // создаем функцию для слайдера
    
    if(counter == items.length -1){ /// если счетчик = длине колличества слайдер
        counter = 0;                      // обнуить его
  
        for(slide of items){
            slide.classList.remove('active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
        }
        items[counter].classList.add('active');   // Добавляем класс ACTIVE нужному элементу

    }
    else{       /// Иначе
        counter++; // увеличеть счетчик на один

        for(slide of items){
            slide.classList.remove('active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
        }
        items[counter].classList.add('active');   // Добавляем класс ACTIVE нужному элементу

    }
}

setInterval(nextSlide, 2200, slides);
