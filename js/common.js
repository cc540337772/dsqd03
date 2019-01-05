 $(document).ajaxStart(function(){
     NProgress.start();
 })
 $(document).ajaxStop(function(){
     setTimeout(function(){
         NProgress.done();
     },500)
 })

 $(function(){

    // (1) 显示模态框
    $('.icon_logout').click(function() {
        // 让模态框显示show 隐藏 hide
        $('#logoutModal').modal("show");
    });
    // 左侧二级菜单切换
    $('.lt_aside .category').click(function(){
        $(this).next().stop().slideToggle();
    })
    $('.icon_menu').click(function(){
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
    })
    // 点击退出按钮发送ajax请求
    $('#logoutBtn').click(function(){
        $.ajax({
            type:'get',
            url:"/employee/employeeLogout",
            dataType:'json',
            success:function(info){
               if(info.success){
                   location.href = 'login.html'
               }
            }
        })
    })
 })