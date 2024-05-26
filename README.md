# Practice_3

## Практическая работа №3 (GitHub Actions)
### Бейдж

[![Lint and Test](https://github.com/IzarlyShark/Practice_3/actions/workflows/workflows.yml/badge.svg)](https://github.com/IzarlyShark/Practice_3/actions/workflows/workflows.yml)

Файл index.js содержит функцию fibonachi(n), которая генерирует последовательность чисел Фибоначчи до n-го элемента. Функция заполняет массив числами Фибоначчи и возвращает этот массив.
Для проверки в терминале: node index.js


### Установка

1. Клонируйте репозиторий на локальную машину:

git clone git@github.com:IzarlyShark/Practice_3.git

2. Установите зависимости:

make install

---

### Использование

Для запуска процесса линтинга и тестирования при каждом пуше или мердже в основную ветку (main/master), используются GitHub Actions.

---

### GitHub Actions

GitHub Actions настроены для выполнения следующих шагов при пуше или мердже в основную ветку:

1. **Линтинг кода**: Проверка стиля кода с использованием линтера.
2. **Тестирование**: Запуск тестов для проверки корректности работы программы.

---

### Команды

- make install - Устанавливает зависимости.
- make lint: Запускает линтер.
- make test: Запускает тесты.

---
