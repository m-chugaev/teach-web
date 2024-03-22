<?php

class CustomException extends \Exception {
    
}

class Test {
    private $age;
    public function __construct($age) {
        $this->age = $age;
    }
}

$obj = new Test('test');

try {
    throw new CustomException();
    var_dump($obj->age);
} catch (CustomException $e) {
    var_dump('CustomException');
} catch (\Throwable $e) {
    var_dump('Throwable');
}

abstract class Human {
    public $name;
    public $age;
    
    // Инкапсуляция. Скрытие внутреннего состояния и функций объекта и предоставление доступа только через открытый набор функций.
    // --- private, protected, public
    private $pasport;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function getInfo() {
        return 'Меня зовут '.$this->name.'. И мне '.$this->age. $this->getPasport();
    }
    
    function getPasport() {
        return $this->pasport;
    }
    
    function setPasport($value) {
        $this->pasport = $value;
        return $this;
    }
    
// Абстракция. Моделирование требуемых атрибутов и взаимодействий сущностей в виде классов для определения абстрактного представления системы.--- abstract
    abstract function check();
}

interface IPRegisterable {
    function register();
}

class Student extends Human implements IPRegisterable {
    private const ADULT_AGE = 18;
    
    function isAdult() {
        return $this->age >= self::ADULT_AGE;
    }
    
    // Полиморфизм. Возможность реализации наследуемых свойств или методов отличающимися способами в рамках множества абстракций.
    // --- переопределение функций
    function getInfo() {
        return 'Я студент '.$this->name.'. И мне '.$this->age. $this->getPasport();
    }
    
    function register() {
        return md5($this->age.$this->name);
    }
    
    function check() {
        return 0;
    }
}

// Наследование. Возможность создания новых абстракций на основе существующих.--- extends
class Teacher extends Human implements IPRegisterable {
    function register() {
        return md5($this->age);
    }
    
    function check() {
        return 0;
    }
}

function check(IPRegisterable $human) {
    return $human->register();
}

$student = new Student('Антон', 18);
$teacher = new Teacher('Миша',25);

print_r($student->getInfo());
echo "\n";
var_dump($student->isAdult());
echo "\n";
var_dump($student->register());
var_dump($teacher->register());
var_dump(check($teacher));

?>