function addContact() {
    // Здесь должен быть код для взаимодействия с телефонной книгой
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    // Пример кода для добавления контакта (не работает в браузере)
    window.plugins.contacts.create({
      displayName: name,
      phoneNumbers: [
        {
          value: phone,
          type: "mobile"
        }
      ]
    });
  }
  