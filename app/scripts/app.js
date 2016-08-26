requirejs.config({
    baseUrl: 'scripts',
    paths: {        
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

requirejs(['components/sidebar','components/donut'],function(sidebar){
    sidebar.init('.nav.nav-sidebar');
});
    
