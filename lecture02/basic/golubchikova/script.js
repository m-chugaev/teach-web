function changeContent(grade) {
    var contentContainer = document.getElementById("contentContainer");

    contentContainer.innerHTML = "";

    if (grade === 'all') {
        contentContainer.innerHTML = "<h3>По всем IT-специалистам</h3><h1 class='ZP'>146 666 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>130 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>16 666 ₽</div><div>премия</div></div></div><div class='image'><img src='all.png' alt=' '></div>";
    } else if (grade === 'lead') {
        contentContainer.innerHTML = "<h3>По Lead IT-специалистам</h3><h1 class='ZP'>331 666 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>290 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>41 666 ₽</div><div>премия</div></div></div><div class='image'><img src='lead.png' alt=' '></div>";
    } else if (grade === 'senior') {
        contentContainer.innerHTML = "<h3>По Senior IT-специалистам</h3><h1 class='ZP'>277 525 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>250 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>27 525 ₽</div><div>премия</div></div></div><div class='image'><img src='senior.png' alt=' '></div>";
    } else if (grade === 'middle'){
        contentContainer.innerHTML = "<h3>По Middle IT-специалистам</h3><h1 class='ZP'>165 833 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>150 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>15 833 ₽</div><div>премия</div></div></div><div class='image'><img src='middle.png' alt=' '></div>";
    } else if (grade === 'junior'){
        contentContainer.innerHTML = "<h3>По Junior IT-специалистам</h3><h1 class='ZP'>74 666 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>68 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>6 666 ₽</div><div>премия</div></div></div><div class='image'><img src='junior.png' alt=' '></div>";
    } else if (grade === 'intern'){
        contentContainer.innerHTML = "<h3>По Intent IT-специалистам</h3><h1 class='ZP'>48 750 ₽</h1><div class='general'><div class='general_salary'><div class='zp'>45 000 ₽</div><div>зарлата</div></div><div class='zp'>+</div><div class='general_salary'><div class='zp'>3 750 ₽</div><div>премия</div></div></div><div class='image'><img src='intern.png' alt=' '></div>";
    }
}