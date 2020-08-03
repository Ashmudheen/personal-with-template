$(document).ready(function(){
    $("#mail").validate({
        rules:{
            "entry.419167781":{
                required:true,
                email:true
            },
            "entry.1327840183" :{
                required:true,
                minlength: 4
            }, 
            "entry.1821002953" : {
                required:true
            }
               

    }
    
   
})
})

$(document).ready(function(){
    $("#secondMail").validate({
        rules:{
            "entry.1386670624":{
                required:true,
                minlength: 10
            },
            "entry.49295349":{
                required:true,
                minlength: 4
               
            },
            "entry.1159669971":{
                required:true,
                email:true
            },
            "entry.330824075":{
                required:true,
                minlength:4
            }
        }
    })
})