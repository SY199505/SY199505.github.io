(function (document) {

    function DomObject(dom) {
        this.dom = dom;
    }

    DomObject.prototype.get = function () {
        return this.dom;
    };

    DomObject.prototype.on = function (eventName, eventHandler) {
        this.get().addEventListener(eventName, eventHandler);
    };

    DomObject.prototype.css = function (styleKey, styleValue) {
        this.get().style[styleKey] = styleValue;
    };

    function $(selector, context) {
        return new DomObject((context || document).querySelector(selector));
    };

    var TetrisObj;

    function startGame() {
        ResourceManager.onResourceLoaded = function () {
            TetrisObj = new Tetris();
            TetrisObj.startGame();
        };
        ResourceManager.init();
    };

    function _init() {
        // $('#btn-start').on('click', function (ev) {
            $('.start-container').css('display', 'none');
            $('.game-container').css('display', 'block');
            startGame();
            new Score().init();
            new Time().init();
        // });
        $('#btn-setting').on('click', function (ev) {
            alert('You clicked the setting button.');
        });
        $('#btn-pause').on('click', function (e) {
            let pauseBtn = e.target;
            console.log(pauseBtn.innerText);
            if (pauseBtn.innerText === '暂停') {
                TetrisObj.pauseGame();
                pauseBtn.innerText = '继续';
            }else{
                TetrisObj.resume();
                pauseBtn.innerText = '暂停'
            }
        });
    };

    document.addEventListener('DOMContentLoaded', function (ev) {
        _init();
    });
})(document);