

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<pre>
<?php

class Form {
    private const SUBMIT_VALUE = 'ok';

    private string $first_name = '';
    private string $last_name = '';
    private string $radio = '';
    private array $check = [];
    private string $submit = '';
    private array $errors = [];

    public function __construct(array $values) {
        foreach ($values as $key => $value) {
            if (property_exists(Form::class, $key)) {
                $this->$key = $value;
            }
        }
    }

    function isSubmitted(): bool {
        return $this->submit === self::SUBMIT_VALUE;
    }

    function validate(): self {
        $this->validateFirstName();
        $this->validateRadio();
        $this->validateCheck();

        return $this;
    }

    function getErrors(): array {
        return $this->errors;
    }

    private function validateFirstName(): void {
        $this->checkIsEmpty('first_name');
        $this->checkLength('first_name', 5);
    }

    private function validateRadio(): void {
        $this->checkIsEmpty('radio');
    }

    private function validateCheck(): void {
        $this->checkIsEmpty('check');
    }

    private function checkIsEmpty(string $name): void {
        if (!empty($this->$name)) {
            return;
        }

        $this->errors[$name][] = 'Поле не может быть пустым';
    }

    private function checkLength(string $name, int $symbolsCount): void {
        if (!is_string($this->$name)) {
            return;
        }

        if (mb_strlen($this->$name) > $symbolsCount) {
            return;
        }

        $this->errors[$name][] = "Поле не может содержать меньше $symbolsCount символов";
    }
}

$form = new Form($_POST);

$errors = [];

if ($form->isSubmitted()) {
    $errors = $form->validate()->getErrors();
}
    
var_dump($_GET);
var_dump($_POST);
var_dump($errors);

?>
</pre>
    <div class="container">
        <div class="form-container">
            <form action="" method="POST" class="form-block">
                <div class="full-width">
                    <div class="col-half">
                        <label for="first_name">First name</label>
                        <input type="text" name="first_name" placeholder="John" class="input-field" value="<?= $_POST['first_name'] ?? '' ?>" />
                        <ul style="color: red"> 
                            <?php foreach ($errors['first_name'] ?? [] as $error) {
                                echo "<li>$error</li>";
                            }?>
                        </ul>
                    </div>
                    <div class="col-half">
                        <label for="last_name">Last name</label>
                        <input type="text" name="last_name" placeholder="Smith" class="input-field" value="<?= $_POST['last_name'] ?? '' ?>" />
                    </div>
                </div>
                <div class="full-width">
                    <div class="col-half">
                        <label for="first_name">Gender</label>
                        <label class="radio-inline">
                            <input type="radio" name="radio" id="inlineRadio1" value="option1" 
                                <?= isset($_POST['radio']) && $_POST['radio'] == 'option1' ? 'checked' : '' ?>
                            > Male
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="radio" id="inlineRadio2" value="option2" 
                                <?= isset($_POST['radio']) && $_POST['radio'] == 'option2' ? 'checked' : '' ?>
                            > Female
                        </label>
                    </div>
                </div>
                <div class="full-width">
                    <div class="col-full">
                        <label for="first_name">Select Tests</label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1" name="check[]"
                            <?= isset($_POST['check']) && is_array($_POST['check']) && in_array('option1', $_POST['check']) ? 'checked' : '' ?>
                            > Obesity Management
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox2" value="option2" name="check[]"
                            <?= isset($_POST['check']) && is_array($_POST['check']) && in_array('option2', $_POST['check']) ? 'checked' : '' ?>
                            > Health DNA
                        </label>
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox3" value="option3" name="check[]"
                            <?= isset($_POST['check']) && is_array($_POST['check']) && in_array('option3', $_POST['check']) ? 'checked' : '' ?>
                            > DNA skin
                        </label>
                    </div>
                </div>
                <div class="full-width">
                    <div class="col-full">
                        <input class="btn btn-submit" type="submit" value="ok" name="submit">
                    </div>
                </div>
            </form>
        </div>
    </div>

    <style>
        button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

        body { background-color: #e6e6e6; font-size: 100%; font-weight: 400;}
        div, textarea, input { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}
        .container { width: 100%; max-width: 1024px; min-width: 324px; margin: auto; background-color: #fff; border: 1px solid #cfcfcf;}
        .header { padding: 25px 40px; border-bottom: 1px solid #ccc; background: url("https://pbs.twimg.com/media/DPt4SyaU8AADANF.jpg"); background-position: 0 50%; background-size: cover; color: #fff;}

        .form-container { width: 100%; margin: 40px 0; float: left;}
        .form-block { display: inline-block; padding: 10px 0 50px; background: #ffffff;}
        .full-width { width: 100%; display: block; float: left; padding: 0 10px;}
        .col-full { width: 100%; float: left; padding: 0 10px;}
        .col-half { width: 50%; float: left; padding: 0 10px;}
        label { width: 100%; float: left; font-size: 14px; font-weight: 600; line-height: 1.6; margin: 15px 0 5px;}
        .input-field { width: 100%; float: left; line-height: 1.6; padding: 4px 10px; font-size: 16px; border: 1px solid #d7d7d7;}

        h1 {  font-weight: 300; display: inline-block; font-weight: 100; font-size: 38px; border-bottom: 1px solid rgba(255, 255, 255, 0.3); margin: 0 0 0.1em 0; padding: 0 0 0.4em 0;}
        h3 { font-weight: 400; font-size: 1.25em; margin: 1em 0 0.4em 0;}
        .btn { font-size: 1.0625em; display: inline-block; padding: 0.74em 1.5em; margin: 1.5em 0 0; color: #fff; border-width: 0 0 0 0; border-bottom: 5px solid; text-transform: uppercase; background-color: #b3b3b3; border-bottom-color: #8c8c8c; font-weight: 300;}
        .btn:hover { background-color: #bfbfbf;}
        .btn.btn-submit { background-color: #4f6fad; border-bottom-color: #374d78; cursor: pointer;}
        .btn.btn-submit:hover { background-color: #5f7db6;}
        .checkbox-inline, .radio-inline { position: relative; display: inline-block; padding: 7px 20px 7px 0; margin-bottom: 0; font-weight: 400; vertical-align: middle; cursor: pointer; width: auto; margin: 0;}
        .checkbox-inline [type=checkbox], .radio-inline [type=radio] { position: relative; top: 2px;}
        .checkbox-inline.first-child, .radio-inline.first-child { padding-left: 0;}
    </style>
</body>

</html>