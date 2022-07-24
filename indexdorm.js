// create add todo list
// function addtodo(){
//     let list = document.createElement('li')
//     let get  = document.getElementById('todonew').value
//     let node = document.createTextNode(get)
//     list.appendChild(node)

    
//     //create condition for null text
//     if (get === '') {
//         alert('Please write something')
//     } else {
//         let elementNew = document.getElementById('mytodolist')
//         elementNew.appendChild(list)
//     }
/* 
    สร้าง list เพื่อสร้าง element li
    สร้าง get  เพื่อรับข้อความผ่าน element id : todonew
    สร้าง node เพื่อใส่ข้อความที่จะเพิ่ม document.createTextNode(get)
    list.appendChild(node) --> นำข้อความ[node]ใส่ list

    สร้าง e และรับ id mytodolist [id ของ ul]
    e.appendChild(list) นำ list อันใหม่ที่สร้างใส่เข้าไป
*/


document.querySelector('#Add').onclick = function (){
    if(document.querySelector('#new_todo input').value.length == 0){
        alert('Please write anything!')
    } 
    else {
        document.querySelector('#task').innerHTML += 
        `<div class="task">
            <span id="taskname" class="col-4">
                ${document.querySelector('#new_todo input').value}
                </span>
                <button class="delete">
                    <i class="bi bi-trash col-6"></i>
                </button>
                
        </div>
        `;

        var current_task = document.querySelectorAll('.delete');
        for (var i=0; i< current_task.length; i++){
            current_task[i].onclick = function (){
                this.parentNode.remove();
            }
        }
    }
}

