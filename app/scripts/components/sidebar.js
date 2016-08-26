define([],function(){
    return {
        init:function(tag){
            $(tag).on('click','li',function(){
                $(tag+'>li').removeClass('active');
                $(this).addClass('active');
                if(!$(this).find('i')[0]) return;
                if($(this).find('i')[0].classList.contains('fa-angle-right')){
                    $(this).find('i')[0].classList.remove('fa-angle-right');
                    $(this).find('i')[0].classList.add('fa-angle-down');
                    $(this).find('.sub-menu').removeClass('collapse');
                }else{
                    $(this).find('i')[0].classList.remove('fa-angle-down');
                    $(this).find('i')[0].classList.add('fa-angle-right');
                    $(this).find('.sub-menu').addClass('collapse');
                }
            })
        }
    };    
});