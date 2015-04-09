/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var stock=document.getElementById('M_stock');
var actualizar=document.getElementById("Actualizar");
var eliminar=document.getElementById("Eliminar");
var agregar=document.getElementById("M_Agregar")
var Add=document.getElementById("Add")
var Content_mod=document.getElementById("content_mod");
var parent_content_stock=document.getElementById("parent_content_stock");
var Content_stock=document.getElementById("content_stock");
var menu=document.getElementById('menu');
var atraz=document.getElementById('on_back');
parent_content_stock.hidden=true
Content_stock.hidden=true;
Content_mod.hidden=true;
var _id=0;
var Camp;



refresh();
stock.onclick=function(e){    
    //Mandamos los datos a las Vista para q los coloque devidamente
    stock_hidden();
    create_Table();
    
}
actualizar.onclick=function(){
  //actualizar en la base de datos .... enviamos a una Api q creamos .    
  console.log("->"+_id);
  $('#imagen').upload('uploadImage.php',
    {
        name_file:$("#name_image").val()
    });
    $.ajax({
        url: "update.php",		 	
        type: 'POST',
        data:{  
            id:_id,
            Titulo:$('#titulo').val(),
            Categoria:$('#categoria').val(),
            Director:$('#director').val(),
            Duracion:$('#duracion').val(),
            Stock:$('#stock').val(),
            Image:"upload/"+$("#name_image").val()
        },
        success: function(data) {
            console.log(data);
        }			
   });
   menu_show();
  refresh();
}
eliminar.onclick=function(){
    //Oculta la vista de Actuzlizar los datos  
     $.ajax({
        url: "delete.php",		 	
        type: 'POST',
        data:{  
            id:_id,        
        },
        success: function(data) {
            console.log(data);
        }			
   });
   refresh();
   menu_show();
}
agregar.onclick=function(){
    newForm({   id:'',
            Titulo:"",
            Categoria:"",
            Director:"",
            Duracion:"",
            Stock:"",
            Image:"upload/cerati.jpg"
        });   
    //menu_show();
    mod_show();
    refresh();
};
Add.onclick=function(){                        
    $('#imagen').upload('uploadImage.php',
    {
        name_file:$("#name_image").val()
    },function(resp){        
        var newObject={              
            Titulo:$('#titulo').val(),
            Categoria:$('#categoria').val(),
            Director:$('#director').val(),
            Duracion:$('#duracion').val(),
            Stock:$('#stock').val(),
            Image:"upload/"+$("#name_image").val()
        };
        $.ajax({
            url: "insert.php",		 	
            type: 'POST',
            data:newObject,
            success: function(data) {
                console.log('exito');
            }			
        });
   });
   menu_show();
   refresh();
    
}
$('.on_back').click(function(){
    menu_show();
    refresh();
});

$('#imagen').on('change',function(){       
});


var newForm=function(obj_video){    
    mod_show();
    document.getElementById('titulo').value=obj_video.Titulo ;
    document.getElementById('categoria').value=obj_video.Categoria;
    document.getElementById('director').value=obj_video.Director;
    document.getElementById('duracion').value=obj_video.Duracion;
    document.getElementById('stock').value=obj_video.Stock;
    document.getElementById('title_image').src=obj_video.Image;    
}
var create_Table=function(){
    
    $(Content_stock).empty();
    var Campos=["Titulo","Categoria","Duracion","Director","Stock"];       
    Content_stock.hidden=false;
   
    Campos.forEach(function(value,index){  
        var color="title"
        Content_stock.innerHTML=Content_stock.innerHTML+block(value,color);
    });
    Content_stock.innerHTML=Content_stock.innerHTML+'<br>';
    Camp.forEach(function(value,index){    
        var contentBlock=$(Content_blocks(value));        
        for(val in value){
            if(val!='id'&& val!="Image"){                     
                contentBlock.append(block(value[val]));
            }            
        }        
        $(Content_stock).append(contentBlock);   
        $(Content_stock).append('<br><br>');   
    });
        
};

var Content_blocks=function(object_Value){
    var contentBlock=document.createElement('div');
    contentBlock.id=object_Value['id'];
    contentBlock.className="click_block";    
    $(contentBlock).click(function(){
        _id=object_Value['id'];        
        newForm(object_Value);
    })
    return $(contentBlock);
}

var block=function(text,color){
    var Class= color!="title" ? "block" : "block_title"; 
   return '<div class="'+Class+'">'+text+'</div>' 
}

function refresh(){
    $.ajax({
        url: "All_videos.php",		 	
        type: 'POST',       
        async: true,
        success: function(data) {
            Camp=$.parseJSON(data);       
            console.log(Camp);
        }			
   });
}
function stock_hidden(){
    $(parent_content_stock).show(500);    
    $(menu).hide(500);
}
function menu_show(){
    $(parent_content_stock).hide(500);
    $(Content_mod).hide(500);
    $(menu).show(500);
}
function mod_show(){
    $(parent_content_stock).hide(500);
    $(Content_mod).show(500);
    $(menu).hide(500);
}



