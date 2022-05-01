/**
 * DOM CSS Add & Remove Class
 * element.classList.add('class');//เพิ่ม class style
 * element.classList.remove('class');// ลบ class style
 * element.classList.toggle('class');// สลับ class style
 * element.classList.contains('class');//เปรียบเทียบ class style
 */
 let yes;
const box=document.getElementById('box');
//ใช้คำสั่ง classList.add เพื่อเพิ่ม คลาสในวงเล็บ
function addDarkMode(){
    box.classList.add('darkMode')
}
//ใช้คำสั่ง classList.remove เพื่อลบ คลาสในวงเล็บ
function removeDarkMode(){
    box.classList.remove('darkMode')
}
//ใช้คำสั่ง classList.toggle เพื่อสลับ คลาสในวงเล็บ

function switchMode(){
    box.classList.toggle('darkMode');
    //คำสั่ง contains จะตรวจสอบว่าในขณะนั้นๆ มีคลาสในวงเล็บ
    //หรือไม่ โดยจะให้ค่าเป็น true ,false
    yes= box.classList.contains('darkMode');
    console.log(yes);
    //การนำค่า true ,false มาใช้งานโดยคำสั่ง if โดยให้เปลี่ยน
    //style ในแทก box ให้เป็นสีตามที่ต้องการ
    if(yes){
        box.style.color='yellow';
    }
    else{
        box.style.color='red';
    }
}
