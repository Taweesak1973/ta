/**DOM Document Object Model 
 เป็นการทำให้ javascript เข้าถึงและควบคุมการเปลี่ยนแปลง
 ของ html css โดยใช้วิธีการดังต่อไปนี้*/

/**การเข้าถึง HTML element ผ่าน id , tag , class
 document.getElementsByTagName('ชื่อแทก')
 document.getElementsById('ชื่อไอดี')
 document.getElementsByClassName('ชื่อคลาส')
*/
document.write("<h1>taweesak@hotmail.com</h1>");
/** การใช้คำสั่งเพื่อเปลี่ยนแปลงเนื้อหา 
 เปลี่ยนเนื้อหา  html:element.innerHTML='  ';
 เปลี่นนเนื้อหา Text:element.innerText='  ';
 เปลี่ยน style Element:element.style.properties=value
 ดำเนินการผ่าน Method
    element.setAttribute(attribute,value)
*/
/**การเข้าถึงผ่าน tag */

const a=document.getElementsByTagName('p');
console.log(a);

/**การเข้าถึงผ่าน id */
const b=document.getElementById('demo');
console.log(b);
/**การเข้าถึงผ่าน class */
const c=document.getElementsByClassName('Hello');
console.log(c);

/**การเปลี่ยนเนื้อหาผ่าน id โดยใช้ฟังชั่น*/
const aa=document.getElementById('demo');//สร้าง ออบเจ็คชื่อ aa
function data(){// ฟังชั่นนี้จะทำงานเมื่อมีการกดปุ่มในหน้า html
aa.innerText='ขอเปลี่ยนข้อความนี้'//aaเรียกใช้ฟังชั่นอินเนอร์เพื่อเปลี่ยนข้อความใน id demo
}
/**การเปลี่ยนเนื้อหาผ่าน id โดยใช้ฟังชั่น*/
const bb=document.querySelector('#demo');//สร้าง ออบเจ็คชื่อ bb
zz=100
function data1(){// ฟังชั่นนี้จะทำงานเมื่อมีการกดปุ่มในหน้า html
bb.innerHTML='<strong>ขอเปลี่ยนข้อความและ html</strong>'+zz//aaเรียกใช้ฟังชั่นอินเนอร์
//เพื่อเปลี่ยนข้อความใน id demo สามารถนำตัวแปรมาแสดงเพิ่มเข้าไปได้โดยใช้เครื่องหมาย +
}
// การใช้ querySelector ซึ่งนิยมใช้แทน getElement
const y=document.querySelector(".one");
y.innerText ='ใช้ .qurySelector แทน .getElement'
// การใช้ querySelectorAll เข้าถึงแทก p ทั้งหมด
const o=document.querySelectorAll('p');//มีลักษณะเป็นอาเรย์
o[1].innerText='Tanhaburut';//เข้าถึงตัวแปรโดยระบุอินเดกซ์

