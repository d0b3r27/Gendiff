## Учебный проект Хекслет, который выводит разницу между двумя файлами в заданном формате (stylish, plain или json)

[![Actions Status](https://github.com/d0b3r27/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/d0b3r27/frontend-project-46/actions)
[![gendiff tests](https://github.com/d0b3r27/frontend-project-46/actions/workflows/tests.yml/badge.svg)](https://github.com/d0b3r27/frontend-project-46/actions/workflows/tests.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/2883c36e47e674119b14/maintainability)](https://codeclimate.com/github/d0b3r27/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2883c36e47e674119b14/test_coverage)](https://codeclimate.com/github/d0b3r27/frontend-project-46/test_coverage)

### Установка:
```bash
make install
```

### Использование:
gendiff [options] 'filepath1' 'filepath2'

  Options:   
    -V, --version        версия   
    -f, --format 'type'  указание формата вывода (по умолчанию stylish), plain или json   
    -h, --help           справка   

Пример:
```bash
gendiff -f plain /file1 /file2
```

### Примеры работы:
[Поиск различий между двумя плоскими json-файлами](https://asciinema.org/a/ecoZSxuePQA1gIfSLRobXH3if)

[Поиск различий между двумя файлами со вложенной структурой](https://asciinema.org/a/mZtzHWKQhOgyIFu057Wn8N21U)

[Поиск различий между двумя файлами со вложенной структурой, плоский формат](https://asciinema.org/a/89GKAp39kFMggXQNgZuERrh1M)

[Поиск различий между двумя файлами со вложенной структурой, формат json](https://asciinema.org/a/7sMv3t4j0c3heLzmTATnLTePR)
