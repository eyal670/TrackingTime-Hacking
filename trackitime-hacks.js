$(document).ready(function(){
   $('head').append(`
    <style>
      .jump-to-task{
        position: absolute;right: 0;
        z-index:9999;
        font-size: 0.8rem;
        cursor: pointer;
        font-size: 1rem;
        padding: 0 0 10px 10px;
      }
      .jump-to-task:hover{
        color: #f54337;
      }
    </style>
   `);
});

$( document ).ajaxStop(function(){
  if($('#QuickTask').css('display')!='none'){
    if(!$('.jump-to-task').length){
      $('.task_name .title').map(function(){
        $(this).before('<a href="https://pro.trackingtime.co/#/task/'+$(this).attr('data-taskid')+'" class="jump-to-task">🡭</a>');
      });
    }
  }
});
