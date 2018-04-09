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

    function startGame () {
        ResourceManager.onResourceLoaded = function () {
            TetrisObj = new Tetris();
            TetrisObj.startGame();
        };
        ResourceManager.init();
    };

    function _init () {
        // $('#btn-start').on('click', function (ev) {
            $('.start-container').css('visibility', 'hidden');
            $('.game-container').css('visibility', 'visible');
            startGame();
        // });

        $('#btn-setting-outside').on('click', function (e) {
            $('.setting-container').css('visibility', 'visible');
        });

        $('#btn-setting-inside').on('click', function (e) {
            TetrisObj.pauseGame();
            $('.setting-container').css('visibility', 'visible');
        });

        $('.setting-close').on('click', function (e) {
            if (TetrisObj) {
                TetrisObj.resume();
            }
            $('.setting-container').css('visibility', 'hidden');
        });

        $('#music').on('click', function (e) {
            config.music = $('#music').get().checked;
            console.log(config.music);
        });

        $('#btn-pause').on('click', function (e) {
            let pauseBtn = e.target;
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