({
    block : 'page',
    title : 'bem-components: radio',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'default1',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'default2',
            mods : { disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple1',
            mods : { theme : 'simple' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple2',
            mods : { theme : 'simple', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple-button1',
            mods : { theme : 'simple', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'simple-button2',
            mods : { theme : 'simple', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal1',
            mods : { theme : 'normal', size : 'm' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal2',
            mods : { theme : 'normal', size : 'm', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-size1',
            mods : { theme : 'normal', size : 'm' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-size2',
            mods : { theme : 'normal', size : 'l' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } },

        { tag : 'h3', content : 'button' },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-button1',
            mods : { theme : 'normal', size : 'm', type : 'button' },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' },
                { val : 3, text : 'third', disabled : true }
            ],
            val : 2
        } },
        { tag : 'p', content : {
            block : 'radio',
            name : 'normal-button2',
            mods : { theme : 'normal', size : 'm', type : 'button', disabled : true },
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ],
            val : 2
        } }
    ]
});
