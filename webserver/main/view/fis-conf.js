fis.config.merge({
    /*
    roadmap : {
        path : [  //自定义开发规范
            {
                reg : '**.css',         //所有css文件
                useSprite : true,       //进行csssprite处理，
                release : '/static/$&'  //发布到static目录下
            },
            {
                reg : './**.js',    //widget下的所有js文件
                isMod : true,            //是组件化文件，将进行自动包装
                release : '/static/$&'   //发布到static目录下
            },
            {
                reg : /\.(cmd|bat|sh)$/i,  //脚本不要发布
                release : false
            },
            {
                reg : /\.(tpl|php|sh)$/i,  //脚本不要发布
                release : false
            }
        ]
    },
    */
    settings : {   //配置插件
        postprocessor : {
            jswrapper : {
                type : 'amd' //以amd方式包装
            }
        }
    },
    pack : {
        'static/js/index.js' : [
            '**.js'
        ],
        'static/css/index.css' : [
            '**.css'
        ]
    },
});